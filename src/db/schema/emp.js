import mongoose, {Schema, model, models} from 'mongoose'

// Schema cho nhân viên
const empSchema = new Schema({
    gen: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, default: 'Operator' },
    status: { type: String, default: 'Active' },
    dept: { type: String, default: '' },
    gender: { type: String, default: '' },
    knoxID: { type: String, default: '' },
    dob: { type: Date, required: true },
    phone: { type: String, default: '' },
    temporaryAddress: { type: String, default: '' },
    province: { type: String, default: '' },
    district: { type: String, default: '' },
    commune: { type: String, default: '' },
    regularAddress: { type: String, default: '' },
    jobGroup: { type: String, default: 'Chưa có việc' },
    jobType: { type: String, default: 'Chờ' },
    jobDetail: { type: String, default: 'Chờ' },
    jobStart: { type: Date, default: Date.now },
    jobEnd: {
        type: Date, default: function() {
            let forever = new Date('9999-12-31');
            return forever;
        }
    },
    jobHistory: { type: String, default: '' },
    onLeaveType: { type: String, default: '' },
    leaveStart: {
        type: Date, default: function() {
            let forever = new Date('9999-12-31');
            return forever;
        }
    },
    leaveEnd: {
        type: Date, default: function() {
            let forever = new Date('9999-12-31');
            return forever;
        }
    },
    maternityType: { type: String, default: 'Normal' },
    maternityEnd: {
        type: Date, default: function() {
            let forever = new Date('9999-12-31');
            return forever;
        }
    },
    manager: { type: String, default: 'system' },
    note: { type: String, default: 'mới thêm' },
    updateBy: { type: String, default: 'system' },
    updateTime: { type: Date, default: Date.now }
})

export const Emp = models.Emp || model("Emp", empSchema)