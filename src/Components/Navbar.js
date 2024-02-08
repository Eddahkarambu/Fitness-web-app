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
        <Link to="/Home">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Support">Support</Link>
        <Link to="/Schedule Consult">Schedule Consult</Link>
      </div>
    </div>
  );
}
export default Navbar;
