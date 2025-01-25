import express, { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import ConnectDB from './config/db'
import cors from 'cors'
import studentRoutes from './routes/student.routes'
import { errorMiddleware } from './middleware/error.middleware'
const app = express()
const Port = process.env.PORT || 3000

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/', studentRoutes)

app.use(errorMiddleware)
ConnectDB()
app.listen(Port, () => {
  console.log(`Server started at http://localhost:${Port}`)
})
