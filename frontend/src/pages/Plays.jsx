
import React from "react";
import "./new.css";


export default function Plays() {
    <div className="page">
      <h1>🎭 Plays</h1>
      <p>Check out the latest drama and theatre performances.</p>
    </div>
  const plays = [
    {
      id: 1,
      title: "Chitrangana The Great Indian Drama ",
      date: "Nov 12, 2025",
      location: "NCPA Mumbai",
      image: "assets/posters/play1.avif",
    },
    {
      id: 2,
      title: "Humare RAAM with Ashutosh Rana as Ravan",
      date: "Nov 20, 2025",
      location: "Delhi Arts Theatre",
      image: "assets/posters/play2.avif",
    },
    {
      id: 3,
      title: "Light Camera Action",
      date: "Dec 5, 2025",
      location: "Hyderabad Playhouse",
      image: "assets/posters/play3.avif",
    },
    {
      id: 4,
      title: "Sita Banaras song by Atul Trivedi",
      date: "Dec 5, 2025",
      location: "Hyderabad Playhouse",
      image: "assets/posters/play4.avif",
    },
    {
      id: 5,
      title: "Village Theatre",
      date: "Dec 5, 2025",
      location: "Hyderabad Playhouse",
      image: "assets/posters/play5.avif",
    },
  ];

  return (
    <div className="page">
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>🎭 Plays</h1>
      <div className="page-grid">
        {plays.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.date}</p>
              <p>{p.location}</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
