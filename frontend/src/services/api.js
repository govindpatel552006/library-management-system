import axios from "axios";
import API_BASE_URL from "../config/api";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Students
export const registerStudent = (data) =>
  API.post("/students", data);

export const getStudents = () =>
  API.get("/students");

export const getDashboardStats = () =>
  API.get("/students/dashboard");

export const getCabinStatus = () =>
  API.get("/students/cabins");

// Auth (owner login)
export const ownerLogin = (data) =>
  API.post("/auth/login", data);

export default API;
