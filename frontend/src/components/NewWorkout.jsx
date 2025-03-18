import { useState } from "react";

function NewWorkout() {
    const [workout, setWorkout] = useState({
        name: "",
        exercises: []
    });
    const [exercise, setExercise] = useState({
        name: "",
        sets: "",
        reps: "",
        weight: 45,
        notes: ""
    });

    const handleWorkoutChange = ((e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value })
    })

    const handleExerciseChange = ((e) => {
        setExercise({ ...exercise, [e.target.name]: e.target.value })
    })

    const handleSubmit = (e) => {

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add new workout</h2>
                <label>Workout Name:</label>
                <input type='text' name='name' placeholder='Ex: Shoulder Day' value={workout.name} onChange={handleWorkoutChange} required /><br />
                <label>Exercise Name:</label>
                <input type='text' name='name' placeholder='Ex: Shoulder Day' value={workout.name} onChange={handleExerciseChange} required />

                <button onClick={handleWorkoutChange}>Add Exercise</button>
            </form>
        </>

    );
}

export default NewWorkout;