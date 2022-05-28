// ■---- api/rbemp/change/dept.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeDept(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/dept'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.dept = [{
                            dept: emp.dept?emp.dept:"RB Team", 
                            group: emp.group?emp.group:"RB Team", 
                            team: emp.team?emp.team:"RB Team", 
                            reason: emp.reason?emp.reason:"change dept", 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now(),
                        }, ...doc.dept]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change dept for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/dept'})
            RbEmp.updateMany({}, {dept: []}, (err, resUpdate) => {
                if (err) res.json({code: 'error'})
                res.json({code: `reset dept for ${resUpdate.modifiedCount} employees`})
            })
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/dept'})
            res.json({code: 'something back'})
            break;    
    }
}