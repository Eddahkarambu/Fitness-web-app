import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import Notfound from "./Notfound";
import Profile from "./Profile";
import Services from "./Services";
import Support from "./Support";

export default class Paths extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Home" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/Dashboard" exact element={<Dashboard />}></Route>
        <Route path="/Profile" exact element={<Profile />}></Route>
        <Route path="/Support" exact element={<Support />}></Route>
        <Route path="/Services" exact element={<Services />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    );
  }
}
