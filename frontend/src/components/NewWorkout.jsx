import { useState, useEffect } from "react";

function NewWorkout() {
    const [workout, setWorkout] = useState({
        name: "test",
        exercises: [],
    });
    const [exercise, setExercise] = useState({
        name: "test ex",
        sets: 5,
        reps: 5,
        weight: 69,
        notes: ""
    });

    const [toggle, setToggle] = useState(false)
    const handleToggleChange = ((e) => {
        setToggle(!toggle)
    })

    const handleWorkoutChange = ((e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value })
    })

    const handleExerciseChange = ((e) => {
        setExercise({ ...exercise, [e.target.name]: e.target.value })
    })

    const addExercise = (e) => {
        e.preventDefault();
        console.log('adding exercise: ', exercise)
        setWorkout({
            ...workout, exercises: [...workout.exercises, exercise]
        })
    }

    useEffect(() => {
        console.log(workout);
        console.log(exercise)
    }, [workout, exercise]);

    const handleSubmit = (e) => {

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
                <button onClick={addExercise}>Add Exercise</button>
            </form>
            {/* {workout.name}
            {workout.exercises} */}
        </>

    );
}

export default NewWorkout;

