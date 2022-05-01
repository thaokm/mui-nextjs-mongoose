import mongoose from 'mongoose'
const MONGO_URI='mongodb+srv://thaokm:abc13579@clustergit.p9cam.mongodb.net/grandInnovationTf?retryWrites=true&w=majority'

export default async function connectMongoose() {
  if (mongoose.connections[0].readyState) {
    console.log('connected already')
  } else {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connected to database')
  }
}