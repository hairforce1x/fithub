import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";



function DisplayRoutine() {
    let params = useParams();
    const [routine, setRoutine] = useState();

    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/routines/id/${params.id}`)
                const data = await response.json();
                setRoutine(data);
            } catch (err) {
                console.error('Error fetching routine', err)
            }
        };
        fetchRoutine()
     }, []);

return (
    <>
        <h2>Hello World{routine.name}</h2>
    </>
);
}

export default DisplayRoutine;