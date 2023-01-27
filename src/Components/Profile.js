import React from "react";
import "./Profile.css";
import axios from "axios";
// import avatar from "../Images/avatar.jpg";
import { FaEnvelope, FaIdBadge } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdSwitchAccount } from "react-icons/md";
// import ImageUploader from "react-images-upload";

function Profile() {
  const onSelectFile = async (event) => {
    const file = event.target.files[0];
    const convertedFile = await convertToBase64(file);
    const s3URL = await axios.post("http://localhost:3001/upload", {
      image: convertedFile,
      imageName: file.name,
    });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };
  return (
    <div className="dashboardprofile">
      <div className="Circle">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        {/* <img className="img" src={avatar} alt="avatar" /> */}
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
