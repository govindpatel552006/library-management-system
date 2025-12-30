const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    registerDate: { type: Date, required: true },
    cabinNumber: { type: String, required: true },
    type: {
      type: String,
      enum: ["Full Time", "Half Time"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
