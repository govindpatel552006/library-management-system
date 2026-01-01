import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-300
     ${
       isActive
         ? "bg-blue-600 dark:bg-blue-800"
         : "hover:bg-blue-500/80 dark:hover:bg-blue-700/60"
     }`;

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          h-screen w-64
          bg-blue-700 dark:bg-[#020617]
          text-white p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h2 className="text-xl font-bold mb-8">
          📚 Library
        </h2>

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
      </aside>
    </>
  );
};

export default Sidebar;


