import { Link } from "react-router-dom";


function WorkoutList({ workouts }) { // Went down a rabbit hole on destructuring
    return (
        <div>
            <h2>Workouts</h2>
            {workouts.length === 0 ? (
                <p>No workouts available</p>
            ) : (
                workouts.map((workout) => (
                    <div key={workout._id}>
                        <h3>                       
                            <Link to={`/workouts/${workout._id}`}>{workout.name}</Link> {/* Learned that a Route must be defined before <Link> will work */}
                        </h3>
                    </div>
                ))
            )}
        </div>
    )
}

export default WorkoutList;