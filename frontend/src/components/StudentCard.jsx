const StudentCard = ({ student }) => {
  return (
    <div className="
      bg-white dark:bg-[#0f172a]
      p-5 rounded-2xl
      shadow-md dark:shadow-black/40
      transition-all duration-300
      hover:scale-[1.02]
    ">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        {student.name}
      </h3>

      <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <p>📱 {student.mobile}</p>
        <p>🏠 {student.address}</p>
        <p>
          🪑 Cabin:{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {student.cabinNumber}
          </span>
        </p>
        <p>⏱ {student.type}</p>
      </div>

      <p className="text-xs mt-4 text-gray-500 dark:text-gray-400">
        Registered: {new Date(student.registerDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default StudentCard;


