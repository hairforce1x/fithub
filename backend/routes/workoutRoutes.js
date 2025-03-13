import express from "express"
import Workout from "../config/models.js"
const router = express.Router()

router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = new Workout({
            name: 'Workout A',
            exercises: [
                { name: 'Barbell Rows', sets: 3, reps: 5 },
                { name: 'Bench Press', sets: 3, reps: 5 },
                { name: 'Squats', sets: 3, reps: 5 }
            ]
        })
    
        const savedWorkout = await newWorkout.save();
    
        res.status(201).json(savedWorkout);
    } catch(err) {
        console.error('Error creating workout:', err);
        res.status(500).json({ error: 'Something went wrong.'})
    }

})


export default router