import { useState } from "react";

const NewRoutine = ({ routines }) => {
    const [routine, setRoutine] = useState('')

    const handleInputChange = (e) => {
        setRoutine(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/routines', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: routine,
                    workouts: [{workoutId: "67d320b45ea97ca791b320de"}]
                })
            })
            if (!response.ok) {
                throw new Error('Submit failed');
            }
        
            const newRoutine = response.json()
            console.log('Routine submitted:', JSON.stringify(newRoutine))
            newRoutine ? console.log('true') : console.log('false')

            setRoutine('')
            
        } catch (err) {
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