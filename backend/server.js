require("dotenv").config();
console.log("Loaded PORT from .env:", process.env.PORT);
console.log("Loaded MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Use your local or deployed frontend
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Import routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Stripe backend is running successfully!");
});

// ✅ Payment route
app.post("/payment", async (req, res) => {
  try {
    const { amount, movieTitle } = req.body;
    const Booking = require("./models/Booking");
    console.log("Creating payment for", movieTitle, "₹" + amount);
    console.log("Using success URL:", `${FRONTEND_URL}/success`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: movieTitle || "Movie Ticket" },
            unit_amount: Math.round(amount * 100),
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 FRONTEND_URL set to: ${FRONTEND_URL}`);
});
