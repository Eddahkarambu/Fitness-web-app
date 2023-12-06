import React from "react";
import "./Hom.css";

function Hom() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Fitness Hub</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#workouts">Workouts</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#profile">Profile</a>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>Your personalized fitness journey starts here. Join us today!</p>
          <a href="#signup" className="cta-button">
            Sign Up Now
          </a>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Workouts</h2>
            <p>
              Access a variety of workouts designed for all fitness levels.
              Achieve your fitness goals with our expert-curated plans.
            </p>
          </div>
          <div className="feature">
            <h2>Nutrition</h2>
            <p>
              Fuel your body with our nutrition plans. Track your calories, log
              your meals, and achieve your fitness goals with a balanced diet.
            </p>
          </div>
          <div className="feature">
            <h2>Community</h2>
            <p>
              Connect with like-minded individuals, share your achievements, and
              get motivated by the fitness community.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Fitness Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hom;
