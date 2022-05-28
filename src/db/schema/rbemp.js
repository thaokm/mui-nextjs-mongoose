// ■---- schema/RbEmp.js
import mongoose, {Schema, model, models} from 'mongoose'

// Schema cho nhân viên
const rbEmpSchema = new Schema({
    gen: { type: String, required: true },
    name: { type: String, required: true },
    knoxID: { type: String, default: '' },
    educationDegree: { type: String, default: 'no data' },
    school: { type: String, default: 'no data' },
    major: { type: String, default: 'no data' },
    certEng: [{
        level: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    certKor: [{
        level: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: [{
        phone: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    regularAddress: [{
        addr: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    temporaryAddress: [{
        addr: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    nationalID: [{
        no: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    ethnic: { type: String, default: 'Kinh' },
    maritalStatus: [{
        marital: { type: String, default: 'single' },
        changeDate: { type: Date, default: Date.now }
    }],
    urgentContact: [{
        phone: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    pregDate: [{
        date: { type: Date }
    }],
    birthDate: [{
        date: { type: Date }
    }],
    dept: [{
        dept: { type: String, default: 'SEV' },
        team: { type: String, default: 'SEV' },
        group: { type: String, default: 'SEV' },
        reason: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    status: [{
        status: { type: String, default: 'Active' },
        reason: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    title: [{
        title: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    duty: [{
        duty: { type: String, default: 'Employee' },
        changeDate: { type: Date, default: Date.now }
    }],
    jobGroup: [{
        job: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    job: [{
        job: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    jobDesc: [{
        job: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    workplace: [{
        location: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    standWork: [{
        isStand: { type: Boolean, default: true },
        changeDate: { type: Date, default: Date.now }
    }],
    directManager: [{
        gen: { type: String, default: 'no data' },
        name: { type: String, default: 'no data' },
        changeDate: { type: Date, default: Date.now }
    }],
    hireDate: { type: Date },
    seniorityDate: { type: Date },
    uniform: [{
        size: { type: String },
        qty: { type: Number },
        desc: { type: String },
        receiveDate: { type: Date }
    }],
    belt: [{
        receiveDate: {type: Date}
    }],
    bra: [{
        size: {type: String},
        receiveDate: {type: Date}
    }],
    sandals: [{
        size: {type: String},
        receiveDate: {type: Date}
    }],
    remark: [{
        remark: {type: String},
        changeDate: {type: Date}
    }],
    evaluation: [{
        result: {type: String},
        evaluationDate: {type: Date}
    }],
    mso: [{
        level: {type: String}, // 1, 2, 3, 4, 5
        msotype: {type: String}, // re-certificate hoặc level-up
        result: {type: String}, // pass hoặc fail
        practicePoint: {type: Number}, // max 70, riêng LV1 và 2 max 50
        theoryPoint: {type: Number}, // max 30, riêng LV1 và 2 max 20
        hrPoint: {type: Number}, // max 30 theo MBO 3 tháng + thâm niên, chỉ áp dụng LV1 và 2
        course: {type: String},
        changeDate: {type: Date}
    }],
    leave: [{
        leaveType: {type: String},
        reason: {type: String},
        startDate: {type: Date},
        endDate: {type: Date},
        actualEndDate: {type: Date}
    }],
    updateTime: {type: Date, default: Date.now}
})

export const RbEmp = models.RbEmp || model("RbEmp", rbEmpSchema)