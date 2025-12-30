const StudentCard = ({ student }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold">{student.name}</h3>
      <p>📱 {student.mobile}</p>
      <p>🏠 {student.address}</p>
      <p>🪑 Cabin: {student.cabinNumber}</p>
      <p>⏱ {student.type}</p>
      <p className="text-sm text-gray-500">
        Registered: {new Date(student.registerDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default StudentCard;

