import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function WorkoutList() { // Went down a rabbit hole on destructuring
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/workouts');
                const data = await response.json();
                setWorkouts(data);
            } catch (err) {
                console.error('Error fetching routines:', err);
            }
        };
        fetchWorkouts();
    }, []);

    useEffect(() => {
        console.log('workouts object: ', workouts)
    }, [workouts]);

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