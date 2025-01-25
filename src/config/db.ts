import mongoose from 'mongoose'

const ConnectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error('mongoose connction failed', error)
    process.exit(1)
  }
}
export default ConnectDB
