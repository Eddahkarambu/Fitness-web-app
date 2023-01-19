import React from "react";
import "./Notfound.css";
import errorpage from "../Images/errorpage.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="alllinks">
      <div className="error">
        <img className="errorpage" src={errorpage} alt="errorpage" />
      </div>
      <div className="twoimages">
        <div className="l">Follow the link below</div>
        <div className="link">
          <Link to="/Home">Home</Link>
        </div>
      </div>
    </div>
  );
}
