import { Student, PrismaClient } from '@prisma/client'

export interface PIStudentRepository {
  create(student: Omit<Student, 'id'>): Promise<Student>
  findAll(): Promise<Student[] | null>
  findById(id: string | number): Promise<Student | null>
  update(
    id: string | number,
    student: Partial<Student>
  ): Promise<Student | null>
  delete(id: string | number): Promise<void>
}

const prisma = new PrismaClient()

export class PostgressStudentRepository implements PIStudentRepository {
  async create(student: Omit<Student, 'id'>): Promise<Student> {
    return await prisma.student.create({
      data: student
    })
  }
  async findAll(): Promise<Student[] | null> {
    return await prisma.student.findMany()
  }
  async findById(id: number): Promise<Student | null> {
    return await prisma.student.findUnique({ where: { id } })
  }
  async update(id: number, student: Partial<Student>): Promise<Student | null> {
    return await prisma.student.update({ where: { id }, data: student })
  }
  async delete(id: number): Promise<void> {
    await prisma.student.delete({ where: { id } })
  }
}
