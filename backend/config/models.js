import mongoose from "mongoose"
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, default: 45 },
    notes: { type: String }
})

const workoutSchema = new Schema({
    name: { type: String, required: true },
    exercises: [exerciseSchema],
    date: { type: Date, default: Date.now },
    routine: { type: Schema.Types.ObjectId, ref: 'Routine' }
})

const routineSchema = new Schema({
    name: { type: String, required: true },
    workouts: [workoutSchema]
})

export const Workout = mongoose.model('Workout', workoutSchema)
export const Routine = mongoose.model('Routine', routineSchema)
