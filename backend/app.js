const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const getCabinStatus = require("./controllers/studentController");
const app = express();

app.use(express.json());+

app.use(cors());

// Routes
app.use("/api/students", require("./routes/studentRoutes"));

app.use("/api/students", require("./routes/studentRoutes"));
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.log(err));
