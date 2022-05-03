import mongoose, {Schema, model, models} from 'mongoose'
// Schema cho mảng Kết quả
const Result = new Schema({
    id: { type: String, required: true },
    select: { type: Number, required: true },
    score: { type: Number, required: true },
})
// Schema cho kết quả bài thi
const examResultSchema = new Schema({
    gen: { type: String, required: true },
    name: { type: String, required: true },
    testTitle: { type: String, required: true },
    result: { type: [Result], required: true },
    updateTime: { type: Date, default: Date.now, required: true }
})

export const ExamResult = models.ExamResult || model("ExamResult", examResultSchema)