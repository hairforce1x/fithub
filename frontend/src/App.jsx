import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ListWorkouts from './components/ListWorkouts'
import Nav from './components/Nav'
import EditWorkout from './components/EditWorkout';
import NewWorkout from './components/NewWorkout';
import './App.css'
import Dedication from './components/Dedication';



function App() {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    try {
      const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:8080/api/workouts');
        const data = await response.json();
        setWorkouts(data)
      } 
    } catch(err){
      console.error(err)
    }

    // Promise.all([
    //   fetch('http://localhost:8080/api/workouts/').then(res => res.json()),
    // ]).then(
    //   links => {
    //     const workoutResponse = links[0];
    //     setWorkouts(workoutResponse);
    //   }
    // )
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

function Home(){
  return <h1>Hello World</h1>
}

export default App
