// ■---- api/rbemp/change/certEng.js
import { RbEmp } from '../../../../db/schema/rbemp'
import connectMongoose from '../../../../db/connect'


export default async function RbEmpChangeCertEng(req, res) {
    let count = 0
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/change/certEng'})
            const changeArray = JSON.parse(req.body)
            console.log(changeArray)
            changeArray.forEach((emp) => {
                RbEmp.findOne({gen: emp.gen})
                    .exec((err, doc) => {
                        doc.certEng = [{
                            level: emp.certEng, 
                            changeDate: emp.changeDate?new Date(emp.changeDate):Date.now(),
                        }, ...doc.certEng]
                        doc.updateTime = Date.now()
                        doc.save((err, doc) => {
                            count++
                            if (count == changeArray.length) res.json({code: `change certEng for ${count} emps completed`})
                        })
                    })
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/change/certEng'})
            res.json({code: 'something back'})
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/change/certEng'})
            res.json({code: 'something back'})
            break;    
    }
}