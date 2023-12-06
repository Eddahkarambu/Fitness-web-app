// src/components/UserProfile.js

import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "Eddah",
    fullName: "Eddah Karambu",
    age: 25,
    gender: "Female",
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="UserProfile">
      <header>
        <h1>User Profile</h1>
      </header>

      <main>
        <section className="user-info">
          <h2>User Information</h2>
          {editing ? (
            <form>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Age:
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                />
              </label>
              <label>
                Gender:
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </form>
          ) : (
            <div>
              <p>
                <strong>Username:</strong> {userData.username}
              </p>
              <p>
                <strong>Full Name:</strong> {userData.fullName}
              </p>
              <p>
                <strong>Age:</strong> {userData.age}
              </p>
              <p>
                <strong>Gender:</strong> {userData.gender}
              </p>
            </div>
          )}
        </section>

        <section className="buttons">
          {editing ? (
            <button onClick={handleSaveClick}>Save Changes</button>
          ) : (
            <button onClick={handleEditClick}>Edit Profile</button>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
