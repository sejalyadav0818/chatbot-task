import React, { useState } from "react";
import "../assets/style/demo.css";
import NavBar from "../components/NavBar";
function InitialScreen({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    if (firstName && lastName) {
      onSubmit(firstName, lastName);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Welcome to Chat App</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InitialScreen;
