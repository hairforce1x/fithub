import { useState, useEffect } from "react";

function NewWorkout() {
    const [workout, setWorkout] = useState({
        name: '',
        exercises: [],
        routine: null
    });
    const [exercise, setExercise] = useState({
        name: '',
        sets: 0,
        reps: 0,
        weight: 0,
        notes: ''
    });

    const [selectedRoutine, setSelectedRoutine] = useState('')

    const handleWorkoutChange = ((e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value })
    })

    const handleExerciseChange = ((e) => {
        setExercise({ ...exercise, [e.target.name]: e.target.value })
    })

    // today I learned preventDefault not required because of type='button'
    const addExercise = (e) => {
        setWorkout({
            ...workout, exercises: [...workout.exercises, exercise],
        })
        setExercise({
            name: "",
            sets: 0,
            reps: 0,
            weight: 0,
            notes: ""
        })
    }

    // Learned useEffect is good for debugging
    // useEffect(() => {
    //     console.log(workout);
    // }, [workout]);

    const handleSubmit = async (e) => {
        e.preventDefault() // spent longer than I would care to admit figuring out that I needed preventDefault here. Rookie mistake.
        console.log('submit pressed')
        const workoutWithRoutine = {
            ...workout, routine: selectedRoutine,
        }
        try {
            const response = await fetch('http://localhost:8080/api/workouts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workoutWithRoutine)
            })

            if (!response.ok) {
                throw new Error('Submit failed');
            }

            const newWorkout = await response.json();

            alert("Workout submitted") // This isn't working right. 

        } catch (err) {
            console.error('Submit failed: ', err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add new workout</h2>

                <label>Workout Name:</label>
                <input type='text' name='name' placeholder='Ex: Shoulder Day' value={workout.name} onChange={handleWorkoutChange} required /><br />
                <label>Exercise Name:</label>
                <input type='text' name='name' placeholder='Ex: Barbell Rows' value={exercise.name} onChange={handleExerciseChange} required /><br />
                <label>Number of sets:</label>
                <input type='number' name='sets' placeholder='Ex: 5' value={exercise.sets} onChange={handleExerciseChange} required /><br />
                <label>Number of reps:</label>
                <input type='number' name='reps' placeholder='Ex: 8' value={exercise.reps} onChange={handleExerciseChange} required /><br />
                <label>Weight:</label>
                <input type='number' name='weight' placeholder='Ex: 69' value={exercise.weight} onChange={handleExerciseChange} required /><br />
                <button type="button" onClick={addExercise}>Add Exercise</button>
            </form>
            <h2>{workout.name}</h2>
            <h3>Exercises:</h3>
            <ul>
                {workout.exercises.map((ex, index) => (
                    <li key={index}>{ex.name} - {ex.sets} sets x {ex.reps} reps @ {ex.weight} lbs</li>
                ))
                }
            </ul>
            <button onClick={handleSubmit}>Submit Workout</button>
        </>

    );
}

export default NewWorkout;

