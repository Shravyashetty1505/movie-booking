import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../api/movies';
import MovieCard from '../components/MovieCard';

export default function Movies(){
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h2>Now showing</h2>
      <div className="movies-grid">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}
