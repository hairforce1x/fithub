
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ListWorkouts from "./ListWorkouts"



function CopyWorkout({ workouts }) {
  const [workout, setWorkout] = useState(null)
  let params = useParams()
  const [routines, setRoutines] = useState([])
  const [selectedRoutine, setSelectedRoutine] = useState('')

  // useEffect(() => {
  //   console.log(workout)
  // }, [workout])

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/routines');
        const data = await response.json();
        setRoutines(data);
      } catch (err) {
        console.error('Error fetching routines:', err);
      }
    };
    fetchRoutines();
  }, []);


  const handleInputChange = (exerciseIndex, field, value) => {
    setWorkout((prevWorkout) => {
      const updatedExercises = prevWorkout.exercises.map((exercise, index) =>
        index === exerciseIndex ? { ...exercise, [field]: value } : exercise // shoutout bracket notation. Tried this with if statements first
      )
      return { ...prevWorkout, exercises: updatedExercises }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (!workout) return;
      const { _id, __v, ...workoutData } = workout;


      const response = await fetch("http://localhost:8080/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workoutData),
      });

      if (response.ok) {
        const newWorkout = await response.json();
        console.log('copied successfully', newWorkout)
      } else {
        console.error('copy failed before catch')
      }
    } catch (err) {
      console.error('Copy failed', err)
    }

  }

  // Learned that I need this because initial state is null. Originally initialized with an object.
  if (!workouts) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
    <ListWorkouts />
    
      {/* <form>
        <h2>{workout.name}</h2>
        <ul>
          {workout.exercises.map((exercise, exerciseIndex) => ( // changed index to exerciseIndex for clarity in handleInputChange function.
            <li key={exerciseIndex}>
              <h4>{exercise.name}</h4>
              <label>
                Sets:
                <input
                  type="number"
                  value={exercise.sets}
                  onChange={(e) => handleInputChange(exerciseIndex, "sets", e.target.value)}
                />
              </label>
              <label>
                Reps:
                <input
                  type="number"
                  value={exercise.reps}
                  onChange={(e) => handleInputChange(exerciseIndex, "reps", e.target.value)}
                />
              </label>
              <label>
                Weight:
                <input
                  type="number"
                  value={exercise.weight}
                  onChange={(e) => handleInputChange(exerciseIndex, "weight", e.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit}>Copy Workout</button>
      </form> */}
    </>
  )
}

export default CopyWorkout;