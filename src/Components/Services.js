import React from "react";
import "./Services.css";
import ladies from "../Images/ladies.jpg";
import mens from "../Images/mens.jpg";
import nutrition from "../Images/nutrition.jpg";
import online from "../Images/online.jpg";
function Services() {
  return (
    <div className="Serve">
      {" "}
      <div className="fitnessheader">FITNESS EXERCISES</div>
      <div className="service">
        <div>
          <img className="ladies" src={ladies} alt="ladies" />
        </div>
        <h1 className="headings">Aerobics</h1>
        <p>
          Aerobics is a form of physical exercise that combines rhythmic aerobic
          exercise with stretching and strength training routines with the goal
          of improving all elements of fitness (flexibility, muscular strength,
          and cardio-vascular fitness).
        </p>
      </div>
      <div className="service">
        <div>
          <img className="online" src={online} alt="online" />
        </div>
        <h1 className="headings">Pilates exercise</h1>
        <p>
          Pilates is a type of exercise that focuses on improving flexibility,
          strength, and body awareness through controlled movements and was
          created in the 1920s by German physical trainer Joseph Pilates for
          rehabilitation purposes. His method was influenced by other forms of
          exercise, including gymnastics and boxing.
        </p>
      </div>
      <div className="service">
        <div>
          <img className="mens" src={mens} alt="mens" />
        </div>
        <h1 className="headings">Circuit Training</h1>
        <p>
          Circuit training is a form of body conditioning that involves
          endurance training, resistance training, high-intensity aerobics, and
          exercises performed in a circuit, similar to high-intensity interval
          training. It targets strength building and muscular endurance.
        </p>
      </div>
      <div className="service">
        <div>
          <img className="nutrition" src={nutrition} alt="nutrition" />
        </div>
        <h1 className="headings">Cardio</h1>
        <p>
          Aerobic exercise is physical exercise of low to high intensity that
          depends primarily on the aerobic energy-generating process. "Aerobic"
          is defined as "relating to, involving, or requiring oxygen", and
          refers to the use of oxygen to meet energy demands during exercise via
          aerobic metabolism adequately.
        </p>
      </div>
    </div>
  );
}
export default Services;
