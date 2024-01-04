import React from "react";
import Paths from "./Components/Router";
// import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Paths />
      </Router>
      {/* </Dashboard> */}
    </div>
  );
}
export default App;
