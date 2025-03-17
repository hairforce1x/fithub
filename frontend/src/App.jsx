import { useState, useEffect } from 'react'

import './App.css'
import EditWorkout from './components/EditWorkout'
import WorkoutList from './components/WorkoutList'



function App() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/workouts/");

        const data = await response.json();
        console.log(data)
        setWorkouts(data);
      } catch (err) {
        console.error('Error fetching workouts:', err)
      } finally {
        setLoading(false)
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
