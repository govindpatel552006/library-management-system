const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/auth");

const app = express();

// Middlewares
app.use(cors({
  origin: "*", // temporary (we’ll lock it later)
}));
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

// Port (Render requires this)
const PORT = process.env.PORT || 5000;

// Database + Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

