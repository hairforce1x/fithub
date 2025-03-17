
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditWorkout() {
  const [workout, setWorkout] = useState(null);
  let params = useParams()
  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/workouts/id/${params.id}`);
        const data = await response.json();
        console.log(data)
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
        index === exerciseIndex ? { ...exercise, [field]: value } : exercise // shoutout bracket notation
      )
      console.log('updated state: ', updatedExercises)
      return { ...prevWorkout, exercises: updatedExercises }
    })
  }

  if (!workout) {
    return (
      <div>Loading...</div> // Learned that I need this because initial state is null. I can initialize with an object but I think that will make my code less scalable
    )
  }

  return (
    <>
      <h2>{workout.name}</h2>
      <ul>
        {workout.exercises.map((exercise, exerciseIndex) => (
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
    </>
  );
}

export default EditWorkout;