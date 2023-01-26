import React, { useState, useEffect } from "react";
import "./Signup.css";
import { connect } from "react-redux";
import { register } from "../Redux/Actions/register.actions";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Signup({ registerUser, error, loading, authenticated }) {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    loading ? setOpen(true) : setOpen(false);

    if (authenticated) {
      navigate("/dashboard");
    }
  }, [error, loading, authenticated]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      toast.error("password Not Match");
    } else if (!firstName && !lastName && !email && !password) {
      toast.error("fill in the correct details");
    } else {
      const name = `${firstName} ${lastName}`;
      const userRole = "user";
      registerUser({ name, email, password, userRole });
    }
  };
  return (
    <div className="signup">
      <Navbar />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />

      <div className="Allcontent">
        <div className="newdiv">
          <div className="head">
            <h1>Hello Friend</h1>
            <div className="paragraph">
              <p>
                To keep connected with us please Sign up with your personal
                information.
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3> Sign up </h3>
            <div className="labels">
              <label>Firstname:</label>
              <br />
              <input
                type="text"
                value={firstName}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />
            </div>

            <div className="labels">
              <label>Lastname:</label>
              <br />
              <input
                type="text"
                value={lastName}
                required
                onChange={(e) => {
                  handleLastNameChange(e);
                }}
              />
              <br />
            </div>

            <div className="labels">
              <label>Email:</label>
              <br />
              <input
                type="email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
              <br />
            </div>

            <div className="labels">
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={password}
                required
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
              <br />
            </div>

            <div className="labels">
              <label>Confirm Password:</label>
              <br />
              <input
                type="password"
                value={confPassword}
                required
                onChange={(e) => {
                  handleConfPasswordChange(e);
                }}
              />
              <br />
            </div>
            <div>Already a member? Log in</div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  registerUser: register,
};

const mapStateToProps = (state) => {
  const { registration } = state;
  return {
    error: registration.error,
    loading: registration.loading,
    authenticated: registration.authenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
