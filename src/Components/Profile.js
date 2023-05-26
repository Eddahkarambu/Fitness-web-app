import React from "react";
import "./Profile.css";
// import picture from "../Images/picture.webp";
function Profile() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        {/* <img src="profile.webj" alt="Eddah" style={{ width: "100%" }} /> */}
        {/* <img className="picture" src={picture} alt="picture" /> */}
        <h1>Eddah Karambu</h1>
        <p className="title">CEO &amp; Founder</p>
        <p>Glam_Girls-Handbags</p>
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
