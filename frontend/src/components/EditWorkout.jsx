
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditWorkout() {
    const [workout, setWorkout] = useState(null);
    let params = useParams()
    useEffect(() => {
        const fetchWorkout = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/workouts/id/${params.id}`);
                const data = await response.json();
                console.log(data)
                setWorkout(data)
            } catch (err) {
                console.error('Error fetching workout:', err)
            }
        }
        fetchWorkout()
    }, [params.id])

    if (!workout) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <h2>{workout.name}</h2>
            <ul>
                {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                        <h4>{exercise.name}</h4>
                        <p>Sets: {exercise.sets}</p>
                        <p>Reps: {exercise.reps}</p>
                        <p>Weight: {exercise.weight}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EditWorkout;