// fileName: Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("mb_user")) || null;

  const logout = () => {
    localStorage.removeItem("mb_user");
    navigate("/");
  };

  return (
    // Updated className for top styling
    <header className="nav-top"> 
      <div className="nav-primary">
        <div className="nav-left">
          <Link to="/">
            <img src="assets/logo.png" alt="logo" className="logo" />
          </Link>
          {/* Main Search Bar */}
          <div className="search-bar">
            {/* Replace 'SearchIcon' with a real icon library component */}
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for Movies, Events, Sports" />
          </div>
        </div>
        <div className="nav-right">
          <div className="location-select">
            <span className="location-icon">📍</span>
            {/* Simplified Location Dropdown */}
            <select>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Delhi</option>
            </select>
          </div>
          
          {user ? (
            <>
              <Link to="/bookings" className="nav-link">My Bookings</Link>
              <span className="nav-user">Hi, {user.name}</span>
              <button className="btn small" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="btn small primary"> {/* Used 'small primary' class to make it look like BookMyShow's sign-in button */}
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
      
      {/* Secondary Nav Bar for categories like Movies, Events, etc. */}
      <nav className="nav-secondary">
        <Link to="/movies" className="nav-link secondary-link">
          Movies
        </Link>
      
        <Link to="/events">Events</Link>
        <Link to="/plays">Plays</Link>
        <Link to="/sports">Sports</Link>
      </nav>
    </header>
  );
}