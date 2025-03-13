const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    notes: { type: String }
})

const workoutSchema = new Schema({
    name: { type: String, required: true },
    exercises: [exerciseSchema],
    date: { type: Date, default: Date.now }
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout;