import { useState } from "react";

function NewWorkout() {
    const [workout, setWorkout] = useState({
        name: "",
        exercises: []
    });
    const [exercise, setExercise] = useState({
        name: "",
        sets: "",
        reps: "",
        weight: 45,
        notes: ""
    });

    // handleInputChanges(() = > {

    // })

    return (
        <>
            Hello World!
        </>
        
     );
}

export default NewWorkout;