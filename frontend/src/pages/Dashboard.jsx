import { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import { getDashboardStats } from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    fullTime: 0,
    halfTime: 0,
    totalIncome: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getDashboardStats();
        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-wrap gap-6">
        <DashboardCard
          title="Total Students"
          value={stats.totalStudents}
        />

        <DashboardCard
          title="Full Time"
          value={stats.fullTime}
        />

        <DashboardCard
          title="Half Time"
          value={stats.halfTime}
        />

        <DashboardCard
          title="Total Income"
          value={`₹${stats.totalIncome}`}
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;




