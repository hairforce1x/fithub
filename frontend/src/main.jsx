import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import EditWorkout from './components/EditWorkout.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workouts/:id" element={<EditWorkout />} />
      </Routes>
    </Router>
  </StrictMode>,
)
