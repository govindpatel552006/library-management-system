import { useState } from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#020617]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1">
        {/* Header */}
        <header className="
          bg-white dark:bg-[#0f172a]
          shadow dark:shadow-black/40
          px-4 py-4
          flex items-center gap-4
        ">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
            Public Library Management System
          </h1>
        </header>

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;



