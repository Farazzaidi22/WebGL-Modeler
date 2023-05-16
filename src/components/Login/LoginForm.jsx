import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ marginBottom: "30px" }}>Log In</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "300px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "300px",
          }}
        />
        <Link
          to="/forgot-password"
          style={{
            marginBottom: "20px",
            textDecoration: "underline",
            fontSize: "16px",
            color: "#899af9",
          }}
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Log In
        </button>
      </form>

      <div>
        <span
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Don't have an account?{" "}
        </span>
        <Link
          to="/forgot-password"
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
            color: "#899af9",
          }}
        >
          Signup now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
