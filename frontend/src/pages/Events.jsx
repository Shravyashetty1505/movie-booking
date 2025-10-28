import React from "react";
import "./new.css";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Music Fest 2025",
      date: "Nov 15, 2025",
      location: "Mumbai Arena",
      image: "assets/posters/event1.avif",
    },
    {
      id: 2,
      title: "Calvin Harris 2025",
      date: "Dec 3, 2025",
      location: "Delhi Convention Center",
      image: "assets/posters/event2.avif",
    },
    {
      id: 3,
      title: "Comedy Night Live with Gaurav Gupta",
      date: "Oct 30, 2025",
      location: "Bangalore Auditorium",
      image: "assets/posters/event3.avif",
    },
    {
      id: 4,
      title: "Laughter Therapy comedy +8 more top comics ",

      date: "Oct 25, 2025",
      location: "Pune City Hall, lakshmi road ",
      image: "assets/posters/event4.avif",
    },
    {
      id: 5,
      title: "Halloween with TALWINDER",
      date: "Nov 10, 2025",
      location: "Hyderabad Convention Center",
      image: "assets/posters/event5.avif",
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">🎉 Events</h1>
      <div className="page-grid">
        {events.map((e) => (
          <div key={e.id} className="card">
            <img src={e.image} alt={e.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{e.title}</h3>
              <p className="card-text">{e.date}</p>
              <p className="card-text">{e.location}</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
