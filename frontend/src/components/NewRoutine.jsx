import { useState } from "react";

const NewRoutine = () => {
    const [routine, setRoutine] = useState()

    const handleInputChange = (e) => {
        setRoutine(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = await fetch('api/routines', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: routineName,
                })
            })
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h2>Create new routine</h2>
            <form onSubmit={handleSubmit}>
            <label>Routine Name</label>
            <input type='text' name='name' placeholder='Ex: Starting Strength' value={routine} onChange={handleInputChange} required />
            <button>Submit</button>
            </form>
        </>
    )
}

export default NewRoutine