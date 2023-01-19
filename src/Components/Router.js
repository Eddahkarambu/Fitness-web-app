import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import Notfound from "./Notfound";
// import About from "./About";
// import Programmes from "./Programmes";
// import Success from "./Success";

export default class Paths extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Home" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/Dashboard" exact element={<Dashboard />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        {/* <Route path="/About" exact element={<About/>}></Route> */}
        {/* <Route path="/Programmes" exact element={<Programmes />}></Route>
                    <Route path="/Success" exact element={<Success/>}></Route>
                    <Route path="/Login" exact element={<Login />}></Route> */}
      </Routes>
    );
  }
}
