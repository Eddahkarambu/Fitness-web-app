import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <h1>Eddah Karambu</h1>
        <p className="title">CEO &amp; Founder</p>
        <p>CROSSFIT COLLECTIVE</p>

        <a href="#">
          <i className="fa fa-dribbble" />
        </a>

        <a href="#">
          <i className="fa fa-twitter" />
        </a>

        <a href="#">
          <i className="fa fa-linkedin" />
        </a>

        <a href="#">
          <i className="fa fa-facebook" />
        </a>

        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
}
export default Profile;
