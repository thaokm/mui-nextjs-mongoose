// ■---- api/rbemp/searchOne.js
import { RbEmp } from '../../../db/schema/rbemp'
import connectMongoose from '../../../db/connect'


export default async function RbEmpSearchOne(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      console.log({code: 'POST to api/rbemp/searchOne'})
      const searchConditions = JSON.parse(req.body)
      console.log(searchConditions) // {gen: '12345678'}
      RbEmp.find(searchConditions).exec((err, result) => {
        if (err) {
            res.send({code: "error"})
            console.log(err)
        } else {
            if (result.length > 0 ) {
                res.json(result[0]) // chỉ lấy phần tử đầu tiên
            } else {
                res.json([])
            }                
        }
      })
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/rbemp/searchOne'})
      res.json({code: 'something back'})
      break
    case 'GET':
      console.log({code: 'GET to api/rbemp/searchOne'})
      res.json({code: 'something back'})
      break
  }
}