import React from "react";

export default function Sports() {
  
    <div className="page">
      <h1>🏆 Sports</h1>
      <p>Discover live sports matches and tournaments.</p>
    </div>
  const sports = [
    {
      id: 1,
      title: "ICC Womens World cup semi finale  2025",
      date: "May 30, 2025",
      location: "Wankhede Stadium, Mumbai",
      image: "assets/posters/sports1.avif",
    },
    {
      id: 2,
      title: "Chess Tournament mind master online ",
      date: "Jan 5, 2026",
      location: "Eden Gardens, Kolkata",
      image: "assets/posters/sports2.avif",
    },
    {
      id: 3,
      title: " jai hind Marathon 2025",
      date: "Dec 10, 2025",
      location: "Bangalore City Grounds",
      image:"assets/posters/sports3.avif",
    },
    {
      id: 4,
      title: " Mid night cycling  2025",
      date: "Dec 10, 2025",
      location: "Mumbai City Grounds",
      image:"assets/posters/sports4.avif",
    },
    {
      id: 5,
      title: "Marathon 2025",
      date: "Dec 10, 2025",
      location: "Bangalore City Grounds",
      image:"assets/posters/sports5.avif",
    },
  ];

  return (
    <div className="page">
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>🏆 Sports</h1>
      <div className="page-grid">
        {sports.map((s) => (
          <div key={s.id} className="card">
            <img src={s.image} alt={s.title} />
            <div className="card-body">
              <h3>{s.title}</h3>
              <p>{s.date}</p>
              <p>{s.location}</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
