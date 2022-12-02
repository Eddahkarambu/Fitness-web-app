import React from "react";
import "./Profile.css";
import avatar from "../Images/avatar.jpg";
import { FaEnvelope, FaIdBadge } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdSwitchAccount } from "react-icons/md";

function Profile() {
  return (
    <div className="dashboardprofile">
      <div className="Circle">
        <img className="img" src={avatar} alt="avatar" />
      </div>

      <div className="personaldetails">
        <div className="info1">
          <div className="icon">
            <FaIdBadge />
          </div>
          <div className="Name"> Eddah Karambu</div>
        </div>
        <div className="info1">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="Email">eddah@gmail.com</div>
        </div>
      </div>

      <div className="accountdetails">
        <div className="info1">
          <div className="icon">
            <MdSwitchAccount />
          </div>
          <div onClick="<Link to='/Signin' >Signin</Link>" className="Account">
            {" "}
            Account
          </div>
        </div>

        <div className="info1">
          <div className="icon">
            <FiLogOut />
          </div>
          <div onClick="<Link to='/Signup' >Signup</Link>" className="Logout">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
