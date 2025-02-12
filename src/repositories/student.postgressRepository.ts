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
    const formattedDate = new Date(student.dateOfBirth)
    const age = parseInt(student.age.toString(), 10)
    return await prisma.student.create({
      data: { ...student, dateOfBirth: formattedDate, age }
    })
  }
  async findAll(): Promise<Student[] | null> {
    return await prisma.student.findMany()
  }
  async findById(id: number): Promise<Student | null> {
    let val

    const idN: number = typeof id === 'string' ? parseInt(id, 10) : id
    console.log(idN)

    if (isNaN(idN)) {
      throw new Error('Id must be a valid number')
    }
    val = await prisma.student.findUnique({ where: { id: idN } })

    return val
  }
  async update(id: number, student: Partial<Student>): Promise<Student | null> {
    return await prisma.student.update({ where: { id }, data: student })
  }
  async delete(id: number): Promise<void> {
    await prisma.student.delete({ where: { id } })
  }
}
