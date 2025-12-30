import { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { getStudents } from "../services/api";
import StudentCard from "../components/StudentCard";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await getStudents();
        setStudents(res.data);
      } catch (error) {
        console.error("Fetch students error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-6">All Students</h2>

      {loading ? (
        <p>Loading students...</p>
      ) : students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Students;

