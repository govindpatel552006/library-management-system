import { useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { registerStudent } from "../services/api";

const RegisterStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    address: "",
    mobile: "",
    registerDate: "",
    cabinNumber: "",
    type: "Full Time",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerStudent(student);
      alert("Student Registered Successfully");

      setStudent({
        name: "",
        address: "",
        mobile: "",
        registerDate: "",
        cabinNumber: "",
        type: "Full Time",
      });
    } catch (error) {
      alert("Error registering student");
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-6">Register New Student</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-3xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={student.mobile}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
            required
          />

          <input
            type="date"
            name="registerDate"
            value={student.registerDate}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="cabinNumber"
            placeholder="Cabin Number"
            value={student.cabinNumber}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <select
            name="type"
            value={student.type}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>Full Time</option>
            <option>Half Time</option>
          </select>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
          Register Student
        </button>
      </form>
    </DashboardLayout>
  );
};

export default RegisterStudent;
