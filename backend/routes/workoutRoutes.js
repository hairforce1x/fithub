import express from "express"
import Workout from "../config/models.js"
const router = express.Router()

// Add new routine
router.post('/routines', async (req, res) => {
    try {
        
    } catch(err) {
        console.error(err)
    }
})

// Add new workout

router.post('/workouts', async (req, res) => {
    try {
        const { name, exercises } = req.body;

        const newWorkout = new Workout({
            name,
            exercises
        })

        const savedWorkout = await newWorkout.save();

        res.status(201).json(savedWorkout);
    } catch (err) {
        console.error('Error creating workout:', err);
        res.status(500).json({ error: 'Something went wrong posting.' })
    }

})

// Get all workouts

router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve workouts' })
    }
})

// Get workout by name - Not sure how useful this is in practice I just wanted to test it out

// router.get('/workouts/name/:name', async (req, res) => {
//     try {
//         const workoutName = req.params.name;
//         const workout = await Workout.findOne({ name: workoutName });

//         if (!workout) {
//             return res.status(404).json({ error: 'Workout not found' })
//         }

//         res.status(200).json(workout);
//     } catch (err) {
//         console.error('Error fetching workout', err);
//         res.status(500).json({ error: 'Something went wrong fetching.' })
//     }
// })

// Get workout by ID

router.get('/workouts/id/:id', async (req, res) => {
    try {
        const workoutId = req.params.id;

        const workout = await Workout.findById(workoutId);

        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' })
        }

        res.status(200).json(workout);
    } catch (err) {
        console.error('Error fetching workout', err);
        res.status(500).json({ error: 'Something went wrong fetching.' })
    }
})

// Update by ID

router.put('/workouts/id/:id', async (req, res) => {
    try {
        const workoutId = req.params.id;
        const updateData = {...req.body, date: new Date()};

        const updatedWorkout = await Workout.findByIdAndUpdate(workoutId, updateData, { new: true });

        if (!updatedWorkout) {
            return res.status(404).json({error: 'Workout not found'})
        }

        res.status(200).json({message: 'Workout update successful', workout: updatedWorkout})
    } catch (err) {
        console.error('Update Error:', err)
        res.status(500).json({ error: 'Could not update'})
    }
})

// Delete by ID

router.delete('/workouts/id/:id', async (req, res) => {
    try {
        const workoutId = req.params.id;

        const deletedWorkout = await Workout.findByIdAndDelete(workoutId)

        if (!deletedWorkout) {
            return res.status(404).json({ error: 'Workout not found' })
        }

        res.status(200).json('Workout deleted')
    } catch (err) {
        console.error('Error deleting workout:', err)
        res.status(500).json({ error: 'Something went wrong deleting.' })
    }
})

export default router