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
// ✅ CORS CONFIG (FINAL FIX)
// --------------------
// 👉 YAHAN APNE REAL FRONTEND RENDER URL ADD KIYA HAI
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://library-management-system-1-hnrs.onrender.com", // FRONTEND (Render Static Site)
];

// ⚠️ Express v5 compatible CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server / Postman requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
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
// Optional health check (recommended)
// --------------------
app.get("/", (req, res) => {
  res.send("🚀 Library Management Backend is running");
});

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
