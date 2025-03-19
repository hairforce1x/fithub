import { useState, useEffect } from 'react'

import './App.css'
import EditWorkout from './components/EditWorkout'
import WorkoutList from './components/WorkoutList'



function App() {
  const [workouts, setWorkouts] = useState([])
  

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/workouts/");
        const data = await response.json();
        setWorkouts(data);
      } catch (err) {
        console.error('Error fetching workouts:', err)
      } 
    }
    fetchWorkouts()
  }, [])
  return (
    <div>
      <WorkoutList workouts={workouts} />
    </div>
  )

}

export default App
