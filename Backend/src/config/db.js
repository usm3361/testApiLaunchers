import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI

export const connectDb = async ()=>{
    try {
        await mongoose.connect(mongoUri)
        console.log('mongodb connected')
    } catch (error) {
        console.error(error)
    }
}