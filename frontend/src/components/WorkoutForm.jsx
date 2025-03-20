import { useState } from "react";

function WorkoutForm() {
    const [name, setName] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name) return;
      
      const response = await fetch("http://localhost:8080/api/workouts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, exercises: [] }),
      });
      
      if (response.ok) {
        onWorkoutSubmit(); // Refresh the list
        setName("");
      }
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Workout Name" required />
        <button type="submit">Add Workout</button>
      </form>
    );
}

export default WorkoutForm;