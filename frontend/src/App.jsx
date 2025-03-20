import { useState, useEffect } from 'react'

import './App.css'
import RoutineList from './components/RoutineList'
import WorkoutList from './components/WorkoutList'



function App() {
  const [workouts, setWorkouts] = useState([])
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8080/api/workouts/').then(res => res.json()),
      fetch('http://localhost:8080/api/routines/').then(res => res.json())
    ]).then(
      links => {
        const workoutResponse = links[0];
        const routineResponse = links[1];

        setWorkouts(workoutResponse);
        setRoutines(routineResponse);
      }
    )
  }, [])

  return (
    <div>
      <RoutineList routines={routines} />
      <WorkoutList workouts={workouts} />
    </div>
  )

}

export default App
