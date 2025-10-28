// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("mb_user", JSON.stringify(data.user));
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      alert("Server error. Check console.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={submit} className="auth-form">
      <h2>Login</h2>
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      <button className="btn">Login</button>
    </form>
  );
}
