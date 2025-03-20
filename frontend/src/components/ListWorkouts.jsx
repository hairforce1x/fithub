import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

    function ListWorkouts({ workoutsArr }) {

        return (
            <>
                <div>
                    <h2>Past Workouts</h2>
                    <ul>
                        {workoutsArr.map((workout) => (
                            <div key={workout._id}>
                                <h3>
                                    <Link to={`/workouts/${workout._id}`}>{workout.name}- {new Date(workout.date).toLocaleDateString()}</Link>
                                </h3>
                            </div>
                        ))}
                    </ul>
                </div>
            </>
        );
    }


export default ListWorkouts;