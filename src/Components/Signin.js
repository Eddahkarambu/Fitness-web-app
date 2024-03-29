import React, { useState, useEffect } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

import { authenticateUser } from "../Redux/Actions/authentication.actions";
import { connect } from "react-redux";
import Navbar from "./Navbar.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Signin({ login, error, loading, authenticated }) {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    loading ? setOpen(true) : setOpen(false);

    if (authenticated) {
      navigate("/dashboard");
    }
  }, [error, loading, authenticated]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email", email);
    if (!email && !password) {
      toast.error("please fill in the correct details");
    } else {
      await login({ email, password });
    }
  };

  return (
    <div className="signin">
      <Navbar />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
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

            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign in
            </button>
          </form>

          <div className="Firsthead">
            <h2>New here!</h2>
            <div className="paragraph">
              Sign up to discover a great amount of new opportunities
            </div>
            <div className="btn">
              <button onClick={() => navigate("/signup")}>Sign up</button>
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

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    error: authentication.error,
    loading: authentication.loading,
    authenticated: authentication.authenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
