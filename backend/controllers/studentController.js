const Student = require("../models/Student");

// Register new student
exports.registerStudent = async (req, res) => {
  try {
    const {
      name,
      address,
      mobile,
      registerDate,
      cabinNumber,
      type,
    } = req.body;

    if (!name || !address || !mobile || !registerDate || !cabinNumber || !type) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = new Student({
      name,
      address,
      mobile,
      registerDate,
      cabinNumber,
      type,
    });

    await student.save();

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to register student",
      error: error.message,
    });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();

    const fullTime = await Student.countDocuments({ type: "Full Time" });
    const halfTime = await Student.countDocuments({ type: "Half Time" });

    // example fees logic
    const fullTimeFee = 2000;
    const halfTimeFee = 1200;

    const totalIncome =
      fullTime * fullTimeFee + halfTime * halfTimeFee;

    res.status(200).json({
      totalStudents,
      fullTime,
      halfTime,
      totalIncome,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCabinStatus = async (req, res) => {
  try {
    const students = await Student.find({}, "cabinNumber");

    // convert to numbers
    const bookedCabins = students.map(s => Number(s.cabinNumber));

    res.status(200).json(bookedCabins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
