import EditWorkout from "../EditWorkout";
import { Link } from "react-router-dom";

function WorkoutList({ workouts }) {
    console.log(workouts)
    return (
        <div>
            <h2>Workouts</h2>
            {workouts.length === 0 ? (
                <p>No workouts available</p>
            ) : (
                workouts.map((workout) => (
                    <div key={workout._id}>
                        <h3>
                            <Link to={`/workouts/${workout._id}`}>{workout.name}</Link>
                        </h3>
                    </div>
                ))
            )}
        </div>
    )
}

export default WorkoutList;

{/* <ul>
                            {workout.exercises.map((exercise, index) => (
                                <li key={index}>
                                    <h4>{exercise.name}</h4>
                                </li>
                            ))}
                        </ul> */}