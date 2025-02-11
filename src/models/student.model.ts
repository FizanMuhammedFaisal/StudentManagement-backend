import mongoose, { Document, Schema } from 'mongoose'

type Gender = 'Male' | 'Female' | 'Other'
export interface IStudent {
  name: string
  age: number
  gender: Gender
  dateOfBirth: Date
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
