import React from "react";
import "./Services.css";
import Navbar from "./Navbar.js";
import apple from "../Images/apple fitness.jpg";
import greatcoaching from "../Images/greatcoaching.png";
import groupworkout from "../Images/groupworkout.webp";

function Services() {
  return (
    <div className="Serve">
      <Navbar />

      <div className="introduction1">
        <h1>STRONG TOGETHER</h1>
        <h2>Getting started is as easy as 1,2, 3</h2>
      </div>

      <div className="intorduct">
        <div className="intorduction2">
          <div className="expl2">
            <h1>01.</h1>
            <div>
              <h1>SCHEDULE AN INTRODUCTION</h1>
              <p className="para1">
                We want to provide you with the best we have to offer - that
                includes setting aside time to get to know you personally!
              </p>
            </div>
          </div>
        </div>

        <div className="intorduction2">
          <div className="expl3">
            <h1>02.</h1>
            <div>
              <h1>MEET A COACH</h1>
              <p className="para1">
                Meet one of our internationally certified coaches to discuss
                your fitness goals and answer your questions about FirstPower
                Fitness.
              </p>
            </div>
          </div>
        </div>

        <div className="intorduction2">
          <div className="expl">
            <h1>03.</h1>
            <div>
              <h1>START YOUR JOURNEY WITH US</h1>
              <p className="para1">
                Get in the best shape of your life surrounded by a supportive
                community! Belong. Become Strong.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Schedule"> Schedule an introduction</div>

      <div className="gymservices">
        <h1>WHAT MAKES OUR FITNESS GYM UNIQUE?</h1>
        <p className="positive">
          We are a powerfully positive functional fitness gym, offering premier
          coaching, equipment and facilities.
        </p>
        <p className="positive">
          equipment and facilities. In a city of 4 million people, there are a
          lot of places to work out. Come and see the difference.
        </p>
      </div>

      <div>
        <img className="apple" src={apple} alt="apple" />
      </div>
      <div className="Group">
        <div className="allcommunity">
          <div>
            {" "}
            <img
              className="groupworkout"
              src={groupworkout}
              alt="groupworkout"
            />
          </div>
          <div className="communitypara">
            <h1>GROUP CLASSES AND COMMUNITY</h1>
            <p>
              Our experience is that beginners and seasoned athletes rise to the
              occasion, are more energized, and produce longer-lasting results
              when they're surrounded by a community that encourages and
              empowers them through every workout. That's why our FPF Core
              Programs and Specialty Classes are intentionally about
              Togetherness.
            </p>
            {/* <p>
              While everyone's goals may differ, the bottom line is, if fitness
              is fun and personal connections are meaningful, your motivation is
              going to increase. If you have a WHY, our group classes are the
              HOW that gets you where you want to be.
            </p> */}
          </div>
        </div>
      </div>

      <div className="Groupp">
        <div className="allcommunityy">
          <div className="communitypara">
            <h1>GREAT COACHING</h1>
            <p>
              FirstPower is proud to set itself apart as a gym where all of our
              coaches are highly trained and internationally certified. Our
              training staff is committed to giving you the attention you need
              with a high standard for excellence in the form, function and
              execution of every movement, but we also are passionate about
              making fitness a great experience.
            </p>
            <p>
              Striving hard after your goals should be something you look
              forward to day after day, and our coaching and FPF Core Programs,
              Specialty Classes and Skill Sessions will deliver!
            </p>
          </div>
          <div>
            {" "}
            <img
              className="greatcoaching"
              src={greatcoaching}
              alt="greatcoaching"
            />
          </div>
        </div>
      </div>

      <div className="register">
        <div className="reg">
          <div className="registry">REGISTRATION FORM</div>
          <div className="registerperson">Register in person</div>

          <div className="completeregistry">
            ...or download, complete, and email your registration to
            crossfitcollective.com. Call +254 799159971 to have any questions
            answered!
          </div>
        </div>
      </div>

      <div className="list">
        <div className="listcrossfit">CROSSFIT COLLECTIVE</div>
        <div className="listItem">Nairobi, Kenya</div>
        <div className="listItem">Galleria Shopping Mall</div>
        <div className="listItem">Langata Rd/Magadi Rd Junction</div>
        <div className="listItem">Nairobi, Kenya</div>
        <div className="listItem"> PO Box 2224-00502</div>
      </div>
    </div>
  );
}
export default Services;
