import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

    function ListWorkouts() {
        const [workouts, setWorkouts] = useState([]);

        useEffect(() => {
            async function fetchWorkouts() {
                const response = await fetch("http://localhost:8080/api/workouts");
                if (response.ok) {
                    const data = await response.json();
                    setWorkouts(data);
                }
            }
            fetchWorkouts();
        }, []);

        return (
            <>
                <div>
                    <h2>Past Workouts</h2>
                    <ul>
                        {workouts.map((workout) => (
                            <div key={workout._id}>
                                <h3>
                                    <Link to={`/workouts/${workout._id}`}>{workout.name}- {new Date(workout.date).toLocaleDateString()}</Link> {/* Learned that a Route must be defined before <Link> will work */}
                                </h3>
                            </div>
                        ))}
                    </ul>
                </div>
            </>
        );
    }


export default ListWorkouts;