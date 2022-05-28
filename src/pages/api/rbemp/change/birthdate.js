// ■---- api/rbemp/change/birthDate.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeBirthDate(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/birthDate'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.birthDate = [{
                            date: emp.birthDate, 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now(),
                        }, ...doc.birthDate]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change birthDate for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/birthDate'})
            res.json({code: 'something back'})
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/birthDate'})
            res.json({code: 'something back'})
            break;    
    }
}