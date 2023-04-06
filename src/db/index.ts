import mongoose from 'mongoose';

const URI = process.env.MONGO_URL || 'mongodb://localhost:27017'

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connected to MongoDB')
    } catch (e) {
        console.log(`Error connecting to MongoDB: ${e}`)
    }
}

