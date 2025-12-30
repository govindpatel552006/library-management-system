import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? "bg-blue-900" : "hover:bg-blue-600"
    }`;

  return (
    <div className="w-64 bg-blue-700 text-white p-5 min-h-screen">
      <h2 className="text-xl font-bold mb-8">📚 Library</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/register" className={linkClass}>
          Register Student
        </NavLink>

        <NavLink to="/students" className={linkClass}>
          Total Students
        </NavLink>

        <NavLink to="/cabins" className={linkClass}>
          Cabins
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;


