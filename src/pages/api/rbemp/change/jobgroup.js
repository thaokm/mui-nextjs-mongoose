// ■---- api/rbemp/change/jobGroup.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeJobGroup(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/jobGroup'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.jobGroup = [{
                            job: emp.jobGroup, 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now(),
                        }, ...doc.jobGroup]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change jobGroup for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/jobGroup'})
            res.json({code: 'something back'})
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/jobGroup'})
            res.json({code: 'something back'})
            break;    
    }
}