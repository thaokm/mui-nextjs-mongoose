import {Emp} from '../../../db/schema/emp'
import connectMongoose from '../../../db/connect'

export default async function emp(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      console.log({code: 'POST to api/user/emp'})
      res.send({code: 'something back'})
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/user/emp'})
      res.send({code: 'something back'})
      break;
    case 'GET':
      console.log({code: 'GET to api/user/emp'})
      Emp.find().exec((err, result) => {
        res.send(result)
      })
      break;    
  }
}