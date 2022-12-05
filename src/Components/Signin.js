import React, { useState } from "react";
import "./Signin.css";
import { authenticateUser } from "../Redux/Actions/authentication.actions";
import { connect } from "react-redux";
import Navbar from "./Navbar.js";

function Signin({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="signin">
      <Navbar />
      <div className="SigninContainer">
        <div className="combined">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="Headin">SIGN IN TO YOUR ACCOUNT</div>

            <div className="fields">
              <label>
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>

            <div className="fields">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
            </div>

            <div className="forgotpassword">
              <label>
                <b>Forgot Password?</b>
              </label>
            </div>

            <div className="checkbox">
              <label>
                <b>Remember Me</b>
              </label>
              <input type="checkbox" value="RememberMe"></input>
            </div>

            <button>Sign in</button>
          </form>

          <div className="Firsthead">
            <h2>New here!</h2>
            <div className="paragraph">
              Sign up to discover a great amount of new opportunities
            </div>
            <div className="btn">
              <div className="buttonss">Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  login: authenticateUser,
};

export default connect(null, mapDispatchToProps)(Signin);
