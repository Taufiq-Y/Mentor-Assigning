import React from "react";
import { Link} from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  // given navlinks
  return (
    <div className="container-fluid">
      <div className="row">
       
          <ul class="navbar">
              <li className="col-sm-12 col-md-5" id="heading">GUVI Geeks</li>
            <li className="col-sm-12 col-md-7 listElemt">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/mentors">Mentors</Link>
            <Link className="link" to="/students">Students</Link>
            <Link className="link" to="/assign-mentor">Asign-Mentor</Link>
            <Link className="link" to="/change-mentor">Change-Mentor</Link>
            <Link className="link" to="/find-by-mentor">Find-By-Mentor</Link>
            </li>
           
          </ul>
         
      </div>
    </div>
  );
}
