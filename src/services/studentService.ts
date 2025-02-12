import { IStudentRepository } from '../repositories/student.repository'
import { PIStudentRepository } from '../repositories/student.postgressRepository'
import { IStudent, Student } from '../models/student.model'

export interface IStudentService {
  createStudent(student: IStudent): Promise<IStudent>
  getAllStudents(): Promise<IStudent[] | null>
  getStudentById(id: string | number): Promise<IStudent | null>
  updateStudent(
    id: string,
    student: Partial<IStudent>
  ): Promise<IStudent | null>
  delete(id: string): Promise<void>
}

export class StudentService implements IStudentService {
  constructor(
    private readonly studentRepository: IStudentRepository | PIStudentRepository
  ) {}
  async createStudent(student: IStudent): Promise<IStudent> {
    console.log(student)
    const existingStudent = await Student.findOne({ email: student.email })
    if (existingStudent) {
      throw new Error('Student with this email already exists')
    }
    return this.studentRepository.create(student)
  }

  async getAllStudents(): Promise<IStudent[] | null> {
    return await this.studentRepository.findAll()
  }
  async getStudentById(id: string | number): Promise<IStudent | null> {
    return await this.studentRepository.findById(id)
  }
  async updateStudent(
    id: string,
    student: Partial<IStudent>
  ): Promise<IStudent | null> {
    return await this.studentRepository.update(id, student)
  }
  async delete(id: string): Promise<void> {
    await this.studentRepository.delete(id)
  }
}
