import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import router from './routes/workoutRoutes.js';

const app = express()

app.use(express.json())
app.use(cors())

// Routes
app.use('/api', router)
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})