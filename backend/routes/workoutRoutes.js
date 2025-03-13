import express from "express"
import Workout from "../config/models.js"
const router = express.Router()

router.post('/workouts', async (req, res) => {
    try {
        const { name, exercises } = req.body;

        const newWorkout = new Workout({
            name,
            exercises
        })

        // const newWorkout = new Workout({
        //     name: 'Workout A',
        //     exercises: [
        //         { name: 'Barbell Rows', sets: 3, reps: 5 },
        //         { name: 'Bench Press', sets: 3, reps: 5 },
        //         { name: 'Squats', sets: 3, reps: 5 }
        //     ]
        // })

        const savedWorkout = await newWorkout.save();

        res.status(201).json(savedWorkout);
    } catch (err) {
        console.error('Error creating workout:', err);
        res.status(500).json({ error: 'Something went wrong posting.' })
    }

})

router.get('/workouts/name/:name', async (req, res) => {
    try {
        const workoutName = req.params.name;
        console.log(workoutName)
        const workout = await Workout.findOne({ name: workoutName});

        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' })
        }

        res.status(200).json(workout);
    } catch (err) {
        console.error('Error fetching workout', err);
        res.status(500).json({ error: 'Something went wrong fetching.' })
    }
})

export default router