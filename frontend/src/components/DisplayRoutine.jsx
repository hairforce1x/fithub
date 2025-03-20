import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import WorkoutList from "./WorkoutList";



function DisplayRoutine() {
    let params = useParams();

    const [workouts, setWorkouts] = useState([])
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:8080/api/workouts/').then(res => res.json()),
            fetch(`http://localhost:8080/api/routines/id/${params}`).then(res => res.json())
        ]).then(
            links => {
                const workoutResponse = links[0];
                const routineResponse = links[1];

                setWorkouts(workoutResponse);
                setRoutines(routineResponse);
            }
        )
    }, [])

    useEffect(() => {
        console.log(routines)
    }, [routines]);

    return (
        <>
            <h2>{routines.name}</h2>
            {/* <WorkoutList /> */}
        </>
    );
}

export default DisplayRoutine;