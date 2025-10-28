const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
