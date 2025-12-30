import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerStudent = (data) =>
  API.post("/students", data);

export const getStudents = () =>
  API.get("/students");

export const getDashboardStats = () =>
  API.get("/students/dashboard");

export const getCabinStatus = () =>
  API.get("/students/cabins");
