import mongoose, {Schema, model, models} from 'mongoose'

// Schema cho user account
const userSchema = new Schema({
    userId: { type: String, required: true },
    password: { type: String, required: true },
    authority: { type: String, default: 'user' }, //user admin
    name: { type: String, default: 'no name' } //active inactive
})

export const User = models.User || model("User", userSchema)