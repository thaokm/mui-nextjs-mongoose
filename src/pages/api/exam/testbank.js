// pages/api/exam/testbank.js
import connectMongoose from '../../../db/connect'
import { TestBank } from "../../../db/schema/testbank"

export default async function testbank(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
        console.log({code: 'POST to api/exam/testbank'})
        const currentTestbank = JSON.parse(req.body)
        let newTestbank = new TestBank(currentTestbank)
        console.log(newTestbank)
        newTestbank.save((err, result) => {
            if (err) console.error(err)
            res.send({code: 'success', text: 'đã lưu đề thi mới', data: result})
        })
        break;
    case 'DELETE':
        console.log({code: 'DELETE to api/exam/testbank'})
        res.send({code: 'something back'})
        break;
    case 'GET':
        console.log({code: 'GET to api/exam/testbank'})
        TestBank.find().exec((err, result) => {
            res.send(result)
        })
        break;    
  }
}