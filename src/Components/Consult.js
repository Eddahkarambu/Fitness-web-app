import React from "react";
import Navbar from "./Navbar.js";
import "./Consult.css";

function Consult() {
  return (
    <div className="consultation">
      <Navbar />

      <div className="consultheader">CROSSFIT COLLECTIVE</div>

      <div className="groupclasses">
        Functional fitness at its best. Coach-led group classes.
      </div>
      <div className="consultexplantion">
        We have yet to find an approach to fitness that is more well-rounded for
        beginners and seasoned athletes alike. Designed to prepare you
        physically for what life throws your way, CrossFit develops skill,
        power, endurance and mental strength. Each class is led by a highly
        skilled trainer, incorporating body weight exercises, barbells, and
        everything in between.
      </div>
    </div>
  );
}

export default Consult;
