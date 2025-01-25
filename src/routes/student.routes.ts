import express from 'express'
import { StudentController } from '../controllers/student.controller'
import { StudentService } from '../services/studentService'
import { StudentRepository } from '../repositories/student.repository'

const studentRepository = new StudentRepository()
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
