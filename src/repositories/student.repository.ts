import { IStudent, Student } from '../models/student.model'

export interface IStudentRepository {
  create(student: IStudent): Promise<IStudent>
  findAll(): Promise<IStudent[] | null>
  findById(id: string): Promise<IStudent | null>
  update(id: string, student: Partial<IStudent>): Promise<IStudent | null>
  delete(id: string): Promise<void>
}

export class StudentRepository implements IStudentRepository {
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
