import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Fithub</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/workouts">Workouts</Link>
           </ul>
        </div>
  );

}