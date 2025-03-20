// import WorkoutForm from "./components/WorkoutForm";

// function App1() {
//     return ( 
//         <>
//             <WorkoutForm />
//         </>
//      );
// }

// export default App1;


import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import ListWorkouts from "./components/ListWorkouts";
// import { WorkoutList } from "./WorkoutList";

export default function App1() {
  const [refresh, setRefresh] = useState(false);

  const handleWorkoutSubmit = () => {
    setRefresh(!refresh); // Triggers a state change to refresh the list
  };

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <WorkoutForm onWorkoutSubmit={handleWorkoutSubmit} />
      <ListWorkouts />
    </div>
  );
}
