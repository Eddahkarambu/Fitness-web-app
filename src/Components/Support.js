import React from "react";
import Navbar from "./Navbar.js";
import customerservice from "../Images/customerservice.jpg";

function Support() {
  return (
    <div>
      <Navbar />

      <div className="Support-programs">
        <div>
          <img
            className="customerservice"
            src={customerservice}
            alt="customerservice"
          />
        </div>
        <div className="support">NEED SUPPORT WE ARE HERE FOR YOU</div>;
        <div className="problem1">
          If you are having problems with our app or services, we’re here to
          help!
        </div>
        <div className="problem2">
          Visit our Help Desk to browse our user guides and frequently asked
          questions
        </div>
        <div className="helpbutton">Help Desk</div>
      </div>
    </div>
  );
}

export default Support;
