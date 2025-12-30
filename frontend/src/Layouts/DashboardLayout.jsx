import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Public Library Management System
          </h1>
        </div>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

