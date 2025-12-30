const express = require("express");
const {
  registerStudent,
  getStudents,
  getDashboardStats,
  getCabinStatus,
} = require("../controllers/studentController");

const router = express.Router();

// Dashboard stats
router.get("/dashboard", getDashboardStats);

// Register student
router.post("/", registerStudent);

// Get all students
router.get("/", getStudents);

module.exports = router;

router.get("/cabins", getCabinStatus);
