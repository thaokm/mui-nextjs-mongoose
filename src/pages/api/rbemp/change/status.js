// ■---- api/rbemp/change/status.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeStatus(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/status'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.status = [{
                            status: emp.status, 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now(),
                            reason: emp.reason?emp.reason:"no reason"
                        }, ...doc.status]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change status for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/status'})
            res.json({code: 'something back'})
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/status'})
            res.json({code: 'something back'})
            break;    
    }
}