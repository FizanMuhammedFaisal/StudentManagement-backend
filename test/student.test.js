const axios = require('axios')

const BaseUrl = 'http://localhost:3000'

describe("Testing Student API's", () => {
  let createdStudentId

  const createStudent = async () => {
    const random = Math.floor(Math.random() * 10000)
    const newStudent = {
      name: 'Test user',
      age: 21,
      gender: 'Male',
      dateOfBirth: new Date(2006, 1, 1),
      email: `testEmail${random}@gmail.com`
    }
    const response = await axios.post(`${BaseUrl}/student`, newStudent)
    expect(response.status).toBe(201)
    return response.data
  }

  test('Add a new Student', async () => {
    const studentData = await createStudent()
    expect(studentData.data).toHaveProperty('id')
    createdStudentId = studentData.id || studentData._id
  })
  test('Getting a single student', async () => {
    const studentData = await createStudent()
    const id = studentData.data.id || studentData.data._id
    const response = await axios.get(`${BaseUrl}/student/${id}`)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(studentData)
  })
  test('Handle errors', async () => {
    try {
      await expect(axios.get(`${BaseUrl}/student/invalid-id`)).rejects.toThrow()
    } catch (error) {
      console.log(error)
      // expect(error.response.status).toBe(404)
    }
  })
})
