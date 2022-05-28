// ■---- api/rbemp/change/duty.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeDuty(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/duty'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.duty = [{
                            duty: emp.duty, 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now()
                        }, ...doc.duty]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change duty for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/duty'})
            RbEmp.updateMany({}, {duty: []}, (err, resUpdate) => {
                if (err) res.json({code: 'error'})
                res.json({code: `reset duty for ${resUpdate.modifiedCount} employees`})
            })
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/duty'})
            res.json({code: 'something back'})
            break;    
    }
}