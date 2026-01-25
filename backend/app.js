// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/auth");

const app = express();

// --------------------
// Middlewares
// --------------------
app.use(express.json());

// --------------------
// ✅ CORS FIX (Express v5 compatible)
// --------------------
const allowedOrigins = [
  "http://localhost:5173",
  "https://library-management-system-iv1f.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS not allowed"), false);
    },
    credentials: true,
  })
);

// --------------------
// Routes
// --------------------
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

// --------------------
// Port
// --------------------
const PORT = process.env.PORT || 5000;

// --------------------
// Database + Server
// --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
