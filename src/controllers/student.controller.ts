import { ApiResponse } from '../types/apiResponseType'
import { IStudentService } from '../services/studentService'
import { Request, Response } from 'express'
import { IStudent } from '../models/student.model'
export class StudentController {
  constructor(private readonly studentService: IStudentService) {}

  async createStudent(
    req: Request,
    res: Response<ApiResponse<IStudent>>
  ): Promise<void> {
    try {
      const student = await this.studentService.createStudent(req.body)
      res.status(201).json({ success: true, data: student })
    } catch (error) {
      res.status(400).json({ success: false, error: (error as Error).message })
    }
  }

  async getAllStudents(
    req: Request,
    res: Response<ApiResponse<IStudent[] | null>>
  ): Promise<void> {
    try {
      const students = await this.studentService.getAllStudents()
      res.status(200).json({ success: true, data: students })
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: 'Failed to fetch students' })
    }
  }
  async updateStudent(
    req: Request,
    res: Response<ApiResponse<IStudent | null>>
  ): Promise<void> {
    try {
      const id = req.params.id

      const student = await this.studentService.updateStudent(id, req.body)

      res.status(200).json({ success: true, data: student })
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: 'Failed to update student' })
    }
  }
  async findStudent(
    req: Request,
    res: Response<ApiResponse<IStudent | null>>
  ): Promise<void> {
    const id = req.params.id
    try {
      const student = await this.studentService.getStudentById(id)
      res.status(200).json({ success: true, data: student })
    } catch (error) {
      res.status(404).json({ success: false, error: 'Failed to find student' })
    }
  }
  async deleteStudent(
    req: Request,
    res: Response<ApiResponse<null>>
  ): Promise<void> {
    const id = req.params.id
    try {
      await this.studentService.delete(id)
      res.status(200).json({ success: true })
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: 'Failed to delete student' })
    }
  }
}
