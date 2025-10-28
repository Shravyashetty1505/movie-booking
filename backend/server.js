require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Your deployed frontend URL
const FRONTEND_URL = process.env.FRONTEND_URL || "https://movie-booking-rho-coral.vercel.app";

// ✅ CORS setup - allow your frontend domain
app.use(
  cors({
    origin: [FRONTEND_URL, "http://localhost:3000"], // allow local + deployed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// ✅ Stripe Payment route
app.post("/payment", async (req, res) => {
  try {
    const { amount, movieTitle } = req.body;

    console.log("Creating payment for:", movieTitle, "₹" + amount);
    console.log("Using success URL:", `${FRONTEND_URL}/success`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: movieTitle || "Movie Ticket" },
            unit_amount: Math.round(amount * 100), // Stripe needs paise
          },
          quantity: 1,
        },
      ],
      success_url: `${FRONTEND_URL}/success`,
      cancel_url: `${FRONTEND_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Booking route
app.post("/api/bookings", async (req, res) => {
  try {
    const Booking = require("./models/Booking");
    const { userId, movieTitle, amount } = req.body;

    if (!userId || !movieTitle || !amount) {
      return res.status(400).json({ message: "Missing booking details" });
    }

    const booking = new Booking({ userId, movieTitle, amount });
    await booking.save();

    console.log("✅ Booking saved:", booking);
    res.status(201).json({ message: "Booking stored", booking });
  } catch (err) {
    console.error("❌ Booking save error:", err);
    res.status(500).json({ message: "Failed to save booking" });
  }
});

// ✅ Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 FRONTEND_URL: ${FRONTEND_URL}`);
});
