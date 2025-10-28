// fileName: Home.jsx
import React from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/Home.css';

const mockMovies = [
  { id: 1, title: "Ek Deewane ki Dewaniyat", synopsis: "Action-packed thriller.", duration: "2h 43m", rating: "9.5/10", poster: "/assets/posters/dkd.avif" },
  { id: 2, title: "kantara", synopsis: "A caped crusader returns.", duration: "2h 32m", rating: "9.0/10", poster: "/assets/posters/kantara.avif" },
  { id: 3, title: "Sunny Sanskari ki Tulsi Kumari", synopsis: "The story of the atomic bomb creator.", duration: "3h 0m", rating: "8.6/10", poster: "/assets/posters/ssktk.avif" },
  { id: 4, title: "Thamma", synopsis: "A retired jailer fights a gang.", duration: "2h 49m", rating: "8.1/10", poster: "/assets/posters/thamma.avif" },
  { id: 5, title: "Gosthi", synopsis: "A retired jailer fights a gang.", duration: "2h 49m", rating: "8.1/10", poster: "/assets/posters/gosthi.avif" },
];

export default function Home() {
  return (
    <section className="home">

      {/* Banner */}
      <section className="home-banner-area">
        <img 
          src="/assets/posters/banner.avif" 
          alt="Promotional Banner" 
          className="promo-banner-img"
        />
        <div className="banner-overlay">
          <h2>Latest Deals & Offers</h2>
          <p>Don't miss out on amazing movie and event discounts.</p>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="recommended-movies">
        <div className="container">
          <h3>Recommended Movies</h3>
          <div className="movie-carousel">
            {mockMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="features">
        <div className="feature-card">
          <h3>Multiple showtimes</h3>
          <p>Pick a time that fits your schedule.</p>
        </div>
        <div className="feature-card">
          <h3>Seat map</h3>
          <p>Choose the exact seats you want.</p>
        </div>
        <div className="feature-card">
          <h3>Easy payments</h3>
          <p>Integrate Stripe / Razorpay later for real payments.</p>
        </div>
      </section>

    </section>
  );
}
