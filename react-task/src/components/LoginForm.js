import React, { useState } from "react";
import "../App.css";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (username, password) => {
    onSubmit(username, password);
  };

  return (
    <header className="App-header">
      <label>Username</label>
      <input
        id="username-input"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="mt">Password</label>
      <input
        id="password-input"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        className="mt"
        id="login-button"
        type="button"
        value="Submit"
        onClick={() => handleSubmit(username, password)}
        disabled={!username || !password}
      />
    </header>
  );
};

export default LoginForm;
