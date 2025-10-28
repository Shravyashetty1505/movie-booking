const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

console.log("✅ Auth route loaded");

router.post("/register", async (req, res) => {
  console.log("📩 Register route hit");
  console.log("Incoming body:", req.body);

  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      console.log("⚠️ Duplicate email:", email);
      return res.status(409).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashed });
    await user.save();

    console.log("✅ User created:", user._id);
    return res.status(201).json({
      message: "User created",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("❌ Register Error (catch):", err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  console.log("📩 Login route hit");
  console.log("Incoming body:", req.body);

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("⚠️ User not found:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("⚠️ Password mismatch for:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("✅ Login successful for:", user._id);
    return res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("❌ Login Error (catch):", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
