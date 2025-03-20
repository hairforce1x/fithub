import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import ListWorkouts from './components/ListWorkouts'
import Nav from './components/Nav'
import EditWorkout from './components/EditWorkout';
import NewWorkout from './components/NewWorkout';
import './App.css'
import Dedication from './components/Dedication';

const handleCopy = () => {

}

function App() {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/workouts/')
        const data = await response.json()
        setWorkouts(data)
      } catch (err) {
        console.error('Error fetching workouts:', err)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/workouts/" element={<ListWorkouts workoutsArr={workouts} />} />
          <Route path="/workouts/:id" element={<EditWorkout />} />
          <Route path="/workouts/add" element={<NewWorkout />} />
          <Route path="/dedication" element={<Dedication />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='container'>
      <h1>Top Workouts</h1>
      <div className='top-links, border-top'>
        <Link to='/workouts/67dbe24cfe425d72daccb883'>Workout A</Link><br />
        <Link to='/workouts/67d320b45ea97ca791b320de'>Workout B</Link>
      </div>
    </div>
  )
}

export default App
