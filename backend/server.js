import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 3000
import userRoutes from './routes/userRoutes.js'

connectDB()

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/v1/user', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))