import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import RoutineList from './components/RoutineList'
import WorkoutList from './components/WorkoutList'
import NewRoutine from './components/NewRoutine'
import ListWorkouts from './components/ListWorkouts'
import Nav from './components/Nav'
import EditWorkout from './components/EditWorkout';



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
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/workouts/" element={<ListWorkouts />} />
          <Route path="/workouts/:id" element={<EditWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home(){
  return <h1>Hello World</h1>
}

{/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workouts/" element={<ListWorkouts />} />
        <Route path="/workouts/:id" element={<ContinueWorkout />} />
        <Route path="/workouts/add" element={<NewWorkout />} />
        <Route path="/routines/add" element={<NewRoutine />} />
        <Route path="/routines/:id" element={<DisplayRoutine />} />
      </Routes>
    </Router> */}

export default App
