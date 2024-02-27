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

      <div className="classesgroup">GROUP CLASSES AND COMMUNITY</div>
      <div>
        Our experience is that beginners and seasoned athletes rise to the
        occasion, are more energized, and produce longer-lasting results when
        they're surrounded by a community that encourages and empowers them
        through every workout. That's why our FPF Core Programs and Specialty
        Classes are intentionally about Togetherness. While everyone's goals may
        differ, the bottom line is, if fitness is fun and personal connections
        are meaningful, your motivation is going to increase. If you have a WHY,
        our group classes are the HOW that gets you where you want to be.
      </div>

      <div>PREP COURSES</div>
      <div>
        Your safety and wellness are our priority! Because we care, everyone
        starts off with a good foundation.
      </div>
    </div>
  );
}

export default Consult;
