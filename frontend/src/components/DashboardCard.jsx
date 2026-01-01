const DashboardCard = ({ title, value }) => {
  return (
    <div className="
      bg-white dark:bg-[#0f172a]
      rounded-2xl shadow-md dark:shadow-black/40
      p-5 transition-all duration-300
      hover:scale-[1.02]
    ">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {title}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
};

export default DashboardCard;
