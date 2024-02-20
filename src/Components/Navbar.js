import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="header-icon">
        <div className="Heading">
          <div className="Gym">
            <h1> CROSSFIT COLLECTIVE </h1>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <Link to="/Home" className="Home">
          Home
        </Link>
        <Link to="/signup" className="Signup">
          Signup
        </Link>
        <Link to="/signin" className="Signin">
          Signin
        </Link>
        <Link to="/Services" className="Services">
          Services
        </Link>
        <Link to="/Dashboard" className="Dashboard">
          Dashboard
        </Link>
        <Link to="/Profile" className="Profile">
          Profile
        </Link>
        <Link to="/Support" className="Support">
          Support
        </Link>

        <div>
          <Link to="/Schedule Consult" className="Consult">
            Schedule Consult
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
