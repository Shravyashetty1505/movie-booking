import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={movie.poster} alt={movie.title} className="poster" />
      </div>
      <h4 className="movie-title">{movie.title}</h4>
      <Link to={`/movies/${movie.id}`} className="book-btn">
        Book Now
      </Link>
    </div>
  );
}
