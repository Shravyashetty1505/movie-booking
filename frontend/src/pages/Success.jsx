import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const saveBookingToDB = async () => {
      // Get booking details from sessionStorage
      const booking = JSON.parse(sessionStorage.getItem("mb_booking") || "null");

      if (booking) {
        // Load existing booking history (if any)
        const oldHistory = JSON.parse(localStorage.getItem("bookingHistory") || "[]");

        // Add the new booking
        const updatedHistory = [...oldHistory, { ...booking, date: new Date().toLocaleString() }];

        // Save updated history
        localStorage.setItem("bookingHistory", JSON.stringify(updatedHistory));

        // Clear current booking from sessionStorage
        sessionStorage.removeItem("mb_booking");

        // If user is logged in, save to MongoDB
        const user = JSON.parse(localStorage.getItem("mb_user") || "null");
        if (user) {
          try {
            const total = booking.seats.length * booking.pricePerSeat;
            const res = await fetch("http://localhost:5000/api/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user.id,
                movieTitle: booking.title,
                amount: total,
              }),
            });
            if (res.ok) {
              console.log("Booking saved to DB");
            } else {
              console.error("Failed to save booking to DB");
            }
          } catch (err) {
            console.error("Error saving to DB:", err);
          }
        }
      }
    };

    saveBookingToDB();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem", color: "white" }}>
      <h1>✅ Payment Successful!</h1>
      <p>Your booking has been confirmed and added to your history.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 16px",
          marginTop: "20px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
}
