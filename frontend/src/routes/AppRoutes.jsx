import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RegisterStudent from "../pages/RegisterStudent";
import Students from "../pages/Students";
import Cabins from "../pages/Cabins";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<RegisterStudent />} />
      <Route path="/students" element={<Students />} />
      <Route path="/cabins" element={<Cabins />} />
    </Routes>
  );
};

export default AppRoutes;

