import React from "react";
import Navbar from "./Navbar.js";

function Support() {
  return (
    <div>
      <Navbar />

      <div className="Support-programs">
        <div className="support">NEED SUPPORT WE ARE HERE FOR YOU</div>;
        <div className="problem1">
          If you are having problems with our app or services, we’re here to
          help!
        </div>
        <div className="problem2">
          Visit our Help Desk to browse our user guides and frequently asked
          questions:
        </div>
      </div>
    </div>
  );
}

export default Support;
