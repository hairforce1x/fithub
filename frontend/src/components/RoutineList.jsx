import { Link } from "react-router-dom";

function RoutineList({ routines }) {
    return (
        <>
        Hello World
        {routines.length === 0 ? (
            <p>No routines available</p>
        ) : (
            routines.map((routine) => (
                <div key={routine._id}>
                    <h3>
                        <Link to={`/routines/${routine._id}`}>{routine.name}</Link>
                        </h3>
                </div>
            ))
        )}
        </>
    )
}

export default RoutineList;