
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"



function EditWorkout() {
  const [workout, setWorkout] = useState(null);
  const [stateChange, setStateChange] = useState();
  let params = useParams()

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/workouts/id/${params.id}`)
        const data = await response.json()
        setWorkout(data)
      } catch (err) {
        console.error('Error fetching workout:', err)
      }
    }
    fetchWorkout()
  }, [])

  const handleInputChange = (exerciseIndex, field, value) => {
    setWorkout((prevWorkout) => {
      const updatedExercises = prevWorkout.exercises.map((exercise, index) =>
        index === exerciseIndex ? { ...exercise, [field]: value } : exercise // shoutout bracket notation. Tried this with if statements first
      )
      return { ...prevWorkout, exercises: updatedExercises }
    })
  }

  const handleCopy = async (e) => {
    e.preventDefault();

    try {

      if (!workout) return;
      const { _id, __v, ...workoutData } = workout;


      const response = await fetch("http://localhost:8080/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workoutData),
      });
      const newWorkout = await response.json();
      if (response.ok) {
        setStateChange(!stateChange);
        console.log('copy successful: ', newWorkout)
      } else {
        console.error('copy failed before catch')
      }
    } catch (err) {
      console.error('Copy failed', err)
    }

  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedWorkout = {
        ...workout,
        exercises: workout.exercises,
      }
      const response = await fetch(`http://localhost:8080/api/workouts/id/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWorkout)
      })

      const newWorkout = await response.json();

      if (response.ok) {
        console.log('update successful')
      } else {
        console.error('update failed before catch')
      }
    } catch (err) {
      console.error('Update failed: ', err)
    }
  }

  // Learned that I need this because initial state is null. Originally initialized with an object.
  if (!workout) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="container">
    <form>
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
      <button onClick={handleUpdate}>Update Workout</button><button onClick={handleCopy}>Copy Workout</button>
    </form>
    </div>
  )
}

export default EditWorkout;