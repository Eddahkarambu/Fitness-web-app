import React from "react";
import Navbar from "./Navbar.js";
import "./Consult.css";
import classes from "../Images/classes.jpg";

function Consult() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // Do something with the form data, like send it to an API
  };
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

      <div className="everythingclasses">
        <div className="everythinggroup">
          <div className="classesgroup">GROUP CLASSES AND COMMUNITY</div>
          <div className="classgroupparagrapgh">
            Our experience is that beginners and seasoned athletes rise to the
            occasion, are more energized, and produce longer-lasting results
            when they're surrounded by a community that encourages and empowers
            them through every workout. That's why our FPF Core Programs and
            Specialty Classes are intentionally about Togetherness. While
            everyone's goals may differ, the bottom line is, if fitness is fun
            and personal connections are meaningful, your motivation is going to
            increase. If you have a WHY, our group classes are the HOW that gets
            you where you want to be.
          </div>
        </div>
        <div>
          {" "}
          <img className="classesimage" src={classes} alt="classes" />
        </div>
      </div>

      <div className="everythingprepcourse">
        <div className="prepcourse">PREP COURSES</div>
        <div className="everythingprep">
          Your safety and wellness are our priority! Because we care, everyone
          starts off with a good foundation.
        </div>
      </div>

      <div className="everythingintrocost">
        <div className="introcost1">Intro to CrossFit @ 8,000/=</div>
        <div className="introcost2">
          New member sign-up is 22,500/= for Intro to CrossFit + Gold Monthly
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Consult;
