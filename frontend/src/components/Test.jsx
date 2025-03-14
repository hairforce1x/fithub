
import { useParams } from "react-router-dom";
function Test() {
    let params = useParams()
    return ( 
        <>
        <h2>Workout id:</h2>
            {params.id}
        </>
     );
}

export default Test;