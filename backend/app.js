// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/auth");

const app = express();

// Middlewares
app.use(express.json());

// ⚡ CORS configuration for production frontend
app.use(cors({
  origin: " https://library-management-system-iv1f.vercel.app/",  
  credentials: true, // allow cookies/auth headers
}));

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

// Port (Render requires this)
const PORT = process.env.PORT || 5000;

// Database + Server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
