export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
export interface IStudent {
  id?: number // Optional since it is auto-generated
  name: string
  age: number
  gender: 'Male' | 'Female' | 'Other'
  dateOfBirth: Date
  email: string
}
