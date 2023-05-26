import React from "react";
import "./Dashboard.css";
// import Profile from "./Profile";
import Users from "./Users";

function Dashboard() {
  return (
    <div className="dashboardItems">
      {/* <div>
        <Profile />
      </div> */}
      <div className="usersPage">
        <Users />
      </div>
    </div>
  );
}
export default Dashboard;
