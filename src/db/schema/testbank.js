// db/schema/testbank.js
import mongoose, {Schema, model, models} from 'mongoose'
// Schema cho mảng Kết quả
const Bank = new Schema({
    id: { type: String, required: true },
    q: { type: String, required: true },
    img: { type: String, default: 'empty', required: true },
    a: { type: String, default: 'empty', required: true },
    b: { type: String, default: 'empty', required: true },
    c: { type: String, default: 'empty', required: true },
    d: { type: String, default: 'empty', required: true },
    score: { type: String, required: true },
    answer: { type: String, required: true },
    })
// Schema cho kết quả bài thi
const testbankSchema = new Schema({
    testTitle: { type: String, required: true },
    testData: { type: [Bank], required: true },
    passScore: { type: Number, required: true },
    testTime: { type: Number, required: true },
    useYN: {type: Boolean, default:true, required: true},
    updateTime: { type: Date, default: Date.now, required: true }
})

export const TestBank = models.TestBank || model("TestBank", testbankSchema)