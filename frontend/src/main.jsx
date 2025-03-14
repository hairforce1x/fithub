import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import EditWorkout from './EditWorkout'
import Test from './components/Test.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit" element={<EditWorkout />} />
        <Route path="/workouts/:id" element={<Test />} />
      </Routes>
    </Router>
  </StrictMode>,
)
