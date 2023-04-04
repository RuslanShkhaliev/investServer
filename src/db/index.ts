import mongoose from 'mongoose';

const URI = process.env.MONGO_URL || 'mongodb+srv://root:root@invest.720fcnh.mongodb.net/?retryWrites=true&w=majority'

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connected to MongoDB')
    } catch (e) {
        console.log(`Error connecting to MongoDB: ${e}`)
    }
}

