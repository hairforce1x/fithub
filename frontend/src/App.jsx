import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [workouts, setWorkouts] = useState([])
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/workouts");
        
        const data = await response.json();
        setWorkouts(data);
      } catch (err) {
        console.error('Error fetching workouts:', err)
      }
    }
    fetchWorkouts()
  }, [])
  
  return (
    <>
       <div>
            <h2>Workouts</h2>

            {workouts.map((workout) => (
              <div key={workout._id}>
                <h3>{workout.name}</h3>
                <ul>
                  {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                      <h4>{exercise.name}</h4>sets: {exercise.sets}, reps: {exercise.reps}, weight: {exercise.weight}
                    </li>
                  )
                  )}
                </ul>
              </div>
            )
            )}
            {/* <ul>
                {workouts.map((workout) => (
                    <li key={workout._id}>{workout.name}</li>
                ))}
            </ul> */}
        </div>
    </>
  )
}

export default App
