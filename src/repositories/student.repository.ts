import { IStudent, Student } from '../models/student.model'

export interface IStudentRepository {
  create(student: Omit<IStudent, 'id'>): Promise<IStudent>
  findAll(): Promise<IStudent[] | null>
  findById(id: string | number): Promise<IStudent | null>
  update(
    id: string | number,
    student: Partial<IStudent>
  ): Promise<IStudent | null>
  delete(id: string | number): Promise<void>
}

export class MongoDBStudentRepository implements IStudentRepository {
  async create(student: IStudent): Promise<IStudent> {
    return await Student.create(student)
  }
  async findAll(): Promise<IStudent[] | null> {
    return await Student.find()
  }
  async findById(id: string): Promise<IStudent | null> {
    return await Student.findById(id)
  }
  async update(
    id: string,
    student: Partial<IStudent>
  ): Promise<IStudent | null> {
    return await Student.findByIdAndUpdate(id, student, { new: true })
  }
  async delete(id: string): Promise<void> {
    await Student.findOneAndDelete({ _id: id })
  }
}
