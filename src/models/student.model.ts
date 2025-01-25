import mongoose, { Document, Schema } from 'mongoose'

export interface IStudent extends Document {
  name: string
  age: number
  gender: 'Male' | 'Female' | 'Other'
  dateofBirth: Date
  email: string
}

const studentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true, unique: true }
})

export const Student = mongoose.model<IStudent>('Student', studentSchema)
