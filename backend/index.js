import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'

const app = express()
const port = 8080

app.use(express.json)
app.use(cors())
connectDB()

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})