const axios = require('axios')

const BaseUrl = 'http://localhost:3000'

describe("Testing Student API's", () => {
  test('Add a new Student', async () => {
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
  })
})
