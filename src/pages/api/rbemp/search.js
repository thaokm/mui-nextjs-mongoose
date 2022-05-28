// ■---- api/rbemp/search.js
import { RbEmp } from '../../../db/schema/rbemp'
import connectMongoose from '../../../db/connect'


export default async function RbEmpSearch(req, res) {
  await connectMongoose()
  switch (req.method) {
    case 'POST':
      let searchBody = {}
      console.log({code: 'POST to api/rbemp/search'})
      const searchConditions = JSON.parse(req.body)
      console.log(searchConditions)
      Object.keys(searchConditions).forEach(key => {
          if (searchConditions[key] != '') {
              if (key == 'name' || key == 'gen' || key == 'dept.0.dept') {
                  searchBody[key] = new RegExp(searchConditions[key])
              } else {
                  searchBody[key] = searchConditions[key]
              }
          }
      })
      console.log(searchBody)
      RbEmp.find(searchBody).exec((err, result) => {
        if (err) {
            res.send({code: "error"})
            console.log(err)
        } else {
            if (result.length > 0 ) {
                let returnArray = result.map(item => {
                    return {
                        gen: item.gen,
                        name: item.name,
                        team: item.dept.length>0?item.dept[0].team:"#unknown",
                        group: item.dept.length>0?item.dept[0].group:"#unknown",
                        dept: item.dept.length>0?item.dept[0].dept:"#unknown",
                        title: item.title.length>0?item.title[0].title:"#unknown",
                        hireDate: item.hireDate?item.hireDate:"#unknown",
                        seniorityDate: item.seniorityDate?item.seniorityDate:"#unknown",
                        gender: item.gender?item.gender:"#unknown",
                        ethnic: item.ethnic?item.ethnic:"#unknown",
                        dob: item.dob?item.dob:"#unknown",
                        educationDegree: item.educationDegree?item.educationDegree:"#unknown",
                        school: item.school?item.school:"#unknown",
                        major: item.major?item.major:"#unknown",
                        knoxID: item.knoxID?item.knoxID:"#unknown",
                        status: item.status.length>0?item.status[0].status:"#unknown",
                        certEng: item.certEng.length>0?item.certEng[0].level:"#unknown",
                        certKor: item.certKor.length>0?item.certKor[0].level:"#unknown",
                        phone: item.phone.length>0?item.phone[0].phone:"#unknown",
                        regularAddress: item.regularAddress.length>0?item.regularAddress[0].addr:"#unknown",
                        temporaryAddress: item.temporaryAddress.length>0?item.temporaryAddress[0].addr:"#unknown",
                        nationalID: item.nationalID.length>0?item.nationalID[0].no:"#unknown",
                        maritalStatus: item.maritalStatus.length>0?item.maritalStatus[0].marital:"#unknown",
                        urgentContact: item.urgentContact.length>0?item.urgentContact[0].phone:"#unknown",
                        duty: item.duty.length>0?item.duty[0].duty:"#unknown",
                        jobGroup: item.jobGroup.length>0?item.jobGroup[0].job:"#unknown",
                        job: item.job.length>0?item.job[0].job:"#unknown",
                        jobDesc: item.jobDesc.length>0?item.jobDesc[0].job:"#unknown",
                    }
                })
                res.json(returnArray)
            } else {
                res.json([])
            }                
        }
      })
      break;
    case 'DELETE':
      console.log({code: 'DELETE to api/rbemp/search'})
      res.json({code: 'something back'})
      break;
    case 'GET':
      console.log({code: 'GET to api/rbemp/search'})
      // RbEmp.find().limit(50).exec((err, result) => {
      //   res.json(result)
      // })
      RbEmp.find().limit(100).exec((err, result) => {
          let returnArray = result.map(item => {
              return {
                  gen: item.gen,
                  name: item.name,
                  team: item.dept.length>0?item.dept[0].team:"#unknown",
                  group: item.dept.length>0?item.dept[0].group:"#unknown",
                  dept: item.dept.length>0?item.dept[0].dept:"#unknown",
                  title: item.title.length>0?item.title[0].title:"#unknown",
                  hireDate: item.hireDate?item.hireDate:"#unknown",
                  seniorityDate: item.seniorityDate?item.seniorityDate:"#unknown",
                  gender: item.gender?item.gender:"#unknown",
                  ethnic: item.ethnic?item.ethnic:"#unknown",
                  dob: item.dob?item.dob:"#unknown",
                  educationDegree: item.educationDegree?item.educationDegree:"#unknown",
                  school: item.school?item.school:"#unknown",
                  major: item.major?item.major:"#unknown",
                  knoxID: item.knoxID?item.knoxID:"#unknown",
                  status: item.status.length>0?item.status[0].status:"#unknown",
                  certEng: item.certEng.length>0?item.certEng[0].level:"#unknown",
                  certKor: item.certKor.length>0?item.certKor[0].level:"#unknown",
                  phone: item.phone.length>0?item.phone[0].phone:"#unknown",
                  regularAddress: item.regularAddress.length>0?item.regularAddress[0].addr:"#unknown",
                  temporaryAddress: item.temporaryAddress.length>0?item.temporaryAddress[0].addr:"#unknown",
                  nationalID: item.nationalID.length>0?item.nationalID[0].no:"#unknown",
                  maritalStatus: item.maritalStatus.length>0?item.maritalStatus[0].marital:"#unknown",
                  urgentContact: item.urgentContact.length>0?item.urgentContact[0].phone:"#unknown",
                  duty: item.duty.length>0?item.duty[0].duty:"#unknown",
                  jobGroup: item.jobGroup.length>0?item.jobGroup[0].job:"#unknown",
                  job: item.job.length>0?item.job[0].job:"#unknown",
                  jobDesc: item.jobDesc.length>0?item.jobDesc[0].job:"#unknown",
              }
          })
        res.json(returnArray)
      })
      break;    
  }
}