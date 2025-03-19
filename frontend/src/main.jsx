import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import EditWorkout from './components/EditWorkout.jsx'
import NewWorkout from './components/NewWorkout.jsx';
import NewRoutine from './components/NewRoutine.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workouts/:id" element={<EditWorkout />} />
        <Route path="/workouts/add" element={<NewWorkout />} />
        <Route path="/routines/add" element={<NewRoutine />} />
      </Routes>
    </Router>
  </StrictMode>,
)
