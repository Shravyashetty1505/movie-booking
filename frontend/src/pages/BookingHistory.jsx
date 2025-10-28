import React, { useEffect, useState } from "react";

export default function BookingHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingHistory") || "[]");
    setHistory(data);
  }, []);

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>🎟️ Booking History</h1>

      {history.length === 0 ? (
        <p style={{ textAlign: "center", color: "#ccc" }}>No bookings yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {history.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                borderRadius: "10px",
                padding: "16px",
                width: "250px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
            >
              <h3 style={{ color: "#fff" }}>{item.title}</h3>
              {item.seats && <p>Seats: {item.seats.join(", ")}</p>}
              {item.pricePerSeat && <p>Price: ₹{item.pricePerSeat}</p>}
              <p style={{ color: "#aaa" }}>Booked on: {item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
