import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function ListWorkouts({ workoutsArr }) {
    const [workouts, setWorkouts] = useState([]);
    
    useEffect(() => {
        setWorkouts(workoutsArr);
    }, [workoutsArr]);

    const deleteHandler = async (id, e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/workouts/id/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setWorkouts(workouts.filter(workout => workout._id !== id));
                console.log('deleted successfully')
            } else {
                console.log('delete not successful')
            }
        } catch(err) {
            console.error('error deleting workout', err)
        }
    }
    return (
        <>
            <div className="list-container">
                <h2>Past Workouts</h2>
                <ul>
                    {workouts.map((workout) => (
                        <div key={workout._id}>
                            <h3>
                                <Link to={`/workouts/${workout._id}`}>{workout.name}- {new Date(workout.date).toLocaleDateString()}-<button type='button' onClick={(e) => deleteHandler(workout._id, e)}>Delete</button></Link>
                            </h3>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}


export default ListWorkouts;