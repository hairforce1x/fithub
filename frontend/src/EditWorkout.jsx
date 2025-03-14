import { useState } from "react";
import { useLocation } from 'react-router-dom';

function EditWorkout() {
    const location = useLocation();
    const { customProp } = location.state || { customProp: 'Default value' };
  
    return <div>{customProp}</div>;
  }
  

export default EditWorkout;
