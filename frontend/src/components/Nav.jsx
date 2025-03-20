import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo"><Link to="/">Fithub</Link></div>
           <ul className="nav-links">
              <Link to="/workouts/add">New Workout</Link>
              <Link to="/workouts">Past Workouts</Link>
              <Link to="/dedication">Dedication</Link>
           </ul>
        </div>
  );

}