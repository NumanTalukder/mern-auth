import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser'

connectDB()

const app = express()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(cookieParser())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))
