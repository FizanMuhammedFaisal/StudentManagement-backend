import express from 'express'
import { StudentController } from '../controllers/student.controller'

import { StudentService } from '../services/studentService'

import { MongoDBStudentRepository } from '../repositories/student.repository'
import { PostgressStudentRepository } from '../repositories/student.postgressRepository'
const DB_TYPE = process.env.DB_TYPE || 'mongo'

let studentRepository
if (DB_TYPE === 'mongo') {
  studentRepository = new MongoDBStudentRepository()
} else if (DB_TYPE === 'postgres') {
  studentRepository = new PostgressStudentRepository()
} else {
  throw new Error('Invalid DB_TYPE. Use "mongo" or "postgres".')
}

const studentService = new StudentService(studentRepository)
const studentController = new StudentController(studentService)
const router = express.Router()

router.get('/students', (req, res) =>
  studentController.getAllStudents(req, res)
)
router.get('/student/:id', (req, res) =>
  studentController.findStudent(req, res)
)
router.post('/student', (req, res) => studentController.createStudent(req, res))
router.put('/student/:id', (req, res) =>
  studentController.updateStudent(req, res)
)
router.delete('/student/:id', (req, res) =>
  studentController.deleteStudent(req, res)
)

export default router
