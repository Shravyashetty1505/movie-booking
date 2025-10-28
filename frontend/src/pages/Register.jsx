// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://movie-booking-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.message || "Error during registration");
      }
    } catch (err) {
      alert("Server error. Check console.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={submit} className="auth-form">
      <h2>Register</h2>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      <button className="btn">Sign up</button>
    </form>
  );
}
