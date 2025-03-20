import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import EditWorkout from './components/EditWorkout.jsx'
import NewWorkout from './components/NewWorkout.jsx';
import NewRoutine from './components/NewRoutine.jsx';
import DisplayRoutine from './components/DisplayRoutine.jsx';
import './index.css'
import App from './App.jsx'
import WorkoutList from './components/WorkoutList.jsx';
import ContinueWorkout from './components/CopyWorkout.jsx';
import App1 from './App1.jsx';
import ListWorkouts from './components/ListWorkouts.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
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
  </StrictMode>,
)
