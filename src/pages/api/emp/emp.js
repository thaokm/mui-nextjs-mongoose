// ■---- api/emp/emp.js
import {Emp} from '../../../db/schema/emp'
import connectMongoose from '../../../db/connect'


export default async function emp(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      let searchBody = {}
      console.log({code: 'POST to api/emp/emp'})
      const searchConditions = JSON.parse(req.body)
      console.log(searchConditions)
      Object.keys(searchConditions).forEach(key => {
          if (searchConditions[key] != '') {
              if (key == 'name' || key == 'gen' || key == 'dept') {
                  searchBody[key] = new RegExp(searchConditions[key])
              } else {
                  searchBody[key] = searchConditions[key]
              }
          }
      })
      console.log(searchBody)
      Emp.find(searchBody).exec((err, result) => {
        if (result.length > 0 ) {
            res.json(result)
        } else {
            res.json([])
        }    
      })
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/emp/emp'})
      res.json({code: 'something back'})
      break;
    case 'GET':
      console.log({code: 'GET to api/emp/emp'})
      Emp.find().limit(50).exec((err, result) => {
        res.json(result)
      })
      break;    
  }
}