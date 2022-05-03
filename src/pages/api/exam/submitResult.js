import {ExamResult} from '../../../db/schema/examResult'
import connectMongoose from '../../../db/connect'

export default async function exam(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      console.log({code: 'POST to api/user/examResult'})
      const currentExamResult = JSON.parse(req.body)
      let newExamResult = new ExamResult(currentExamResult)
      newExamResult.save((err, result) => {
          res.send({code: 'success', text: 'đã lưu kết quả bài thi', data: result})
      })
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/user/examResult'})
      res.send({code: 'something back'})
      break;
    case 'GET':
      console.log({code: 'GET to api/user/examResult'})
      Emp.find().exec((err, result) => {
        res.send(result)
      })
      break;    
  }
}