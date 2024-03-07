import React from "react";
import Navbar from "./Navbar.js";
import "./Support.css";
import customerservice from "../Images/customerservice.jpg";

function Support() {
  return (
    <div>
      <Navbar />

      <div className="Support-programs">
        <div className="customerservice">
          <img
            className="customerservice"
            src={customerservice}
            alt="customerservice"
          />
        </div>
        <div className="support">NEED SUPPORT WE ARE HERE FOR YOU</div>;
        <div className="problem1">
          If you are having problems with our app or services, we are here to
          help!
        </div>
        <div className="problem2">
          Visit our Help Desk to browse our user guides and frequently asked
          questions
        </div>
        <div className="helpbutton1">
          <div className="helpbutton">Help Desk</div>
        </div>
        <div className="problem3">
          Cannot find the answer you are looking for? Drop us a line at
          app@strengthlog.com and we will get back to you within a workday!
        </div>
        <div className="contactbutton1">
          <div className="contactbutton">Contact us</div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Support;
