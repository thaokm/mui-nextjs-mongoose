import {Emp} from '../../../db/schema/emp'
import connectMongoose from '../../../db/connect'

export default async function emp(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      console.log({code: 'POST to api/user/emp'})
      console.log(req.body)
      const {gen, phone} = JSON.parse(req.body)
      console.log(gen, phone)
      Emp.find({gen: gen}).exec((err, result) => {
        console.log(result)
        if (result.length > 0 ) {
            if (result[0].phone == phone) {
                res.json({code: 'success', text: '', data: result[0]})
            } else {
                res.json({code: 'err', text: 'sai số điện thoại'})
            }
        } else {
            res.json({code: 'err', text: 'số GEN không tồn tại'})
        }    
      })
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