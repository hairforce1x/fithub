
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
  }, [params.id])

  if (!workout) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <h2>{workout.name}</h2>
      <ul>
        {workout.exercises.map((exercise, index) => (
          <li key={index}>
            <h4>{exercise.name}</h4>
            <label>
              Sets:
              <input
                type="number"
                value={exercise.sets}
                onChange={(e) => handleInputChange(index, "sets", e.target.value)}
              />
            </label>
            <label>
              Reps:
              <input
                type="number"
                value={exercise.reps}
                onChange={(e) => handleInputChange(index, "reps", e.target.value)}
              />
            </label>
            <label>
              Weight:
              <input
                type="number"
                value={exercise.weight}
                onChange={(e) => handleInputChange(index, "weight", e.target.value)}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EditWorkout;