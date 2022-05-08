// api/user/user.js
import {User} from '../../../db/schema/user'
import connectMongoose from '../../../db/connect'

export default async function emp(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      console.log({code: 'POST to api/user/user'})
      console.log(req.body)
      const {userId, password} = JSON.parse(req.body)
      console.log(userId, password)
      User.find({userId: userId}).exec((err, result) => {
        console.log(result)
        if (result.length > 0 ) {
            if (result[0].password == password) {
                res.json({code: 'success', text: '', data: result[0]})
            } else {
                res.json({code: 'err', text: 'sai mật khẩu'})
            }
        } else {
            res.json({code: 'err', text: 'người dùng không tồn tại'})
        }    
      })
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/user/user'})
      res.send({code: 'something back'})
      break;
    case 'GET':
      console.log({code: 'GET to api/user/user'})
      User.find().exec((err, result) => {
        res.send(result)
      })
      break;    
  }
}