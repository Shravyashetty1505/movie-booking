
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../api/movies';
import SeatSelector from '../components/SeatSelector';


export default function MovieDetail(){
 const { id } = useParams();
 const navigate = useNavigate();
 const [movie, setMovie] = useState(null);
 const [screen, setScreen] = useState(null);
 const [time, setTime] = useState(null);
 const [selectedSeats, setSelectedSeats] = useState([]);


 useEffect(() => {
  getMovieById(id).then(setMovie);
 }, [id]);


 useEffect(() => {
  if (movie && movie.screens) setScreen(movie.screens[0]);
 }, [movie]);


 if (!movie) return <div>Loading...</div>;


 const goCheckout = () => {
  // save booking in sessionStorage for checkout page
  const booking = { movieId: movie.id, title: movie.title, screenId: screen.id, time, seats: selectedSeats, pricePerSeat: movie.price };
  sessionStorage.setItem('mb_booking', JSON.stringify(booking));
  navigate('/checkout');
 };


 return (
  <div className="movie-detail">
   <div className="detail-left">
    <img src={movie.poster} alt={movie.title} className="poster large"/>
   </div>
   <div className="detail-right">
    <h2>{movie.title}</h2>
    <p className="muted">{movie.duration} • {movie.rating}</p>
    <p>{movie.synopsis}</p>


    <div className="form-row">
     <label>Screen</label>
     <select value={screen?.id} onChange={e=> setScreen(movie.screens.find(s=>s.id===e.target.value))}>
      {movie.screens.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
     </select>
    </div>


    <div className="form-row">
     <label>Show time</label>
     <select value={time||''} onChange={e=> setTime(e.target.value)}>
      <option value="">Select time</option>
      {screen?.times.map(t => <option key={t} value={t}>{t}</option>)}
     </select>
    </div>


    <h4>Pick seats</h4>
    <SeatSelector onChange={setSelectedSeats} reserved={[]} />


    <div className="checkout-bar">
     <div>{selectedSeats.length} seats × ₹{movie.price} = <strong>₹{selectedSeats.length*movie.price}</strong></div>
     <button className="btn" disabled={!time || selectedSeats.length===0} onClick={goCheckout}>Proceed to Checkout</button>
    </div>
   </div>
  </div>
 );
}


