// ■---- api/rbemp/new.js
import { RbEmp } from '../../../db/schema/rbemp'
import connectMongoose from '../../../db/connect'


export default async function RbEmpNew(req, res) {
    await connectMongoose()
    switch (req.method) {
        case 'POST':
            console.log({code: 'POST to api/rbemp/new'})
            const newEmps = JSON.parse(req.body)
            console.log(newEmps)
            RbEmp.insertMany(newEmps, (err, result) => {
                if (result.length > 0 ) {
                    res.json(result)
                } else {
                    res.json([])
                }    
            })
            break;
        case 'DELETE':
            console.log({code: 'DELETE to api/rbemp/new'})
            res.json({code: 'something back'})
            break;
        case 'GET':
            console.log({code: 'GET to api/rbemp/new'})
            res.json({code: 'something back'})
            break;    
    }
}