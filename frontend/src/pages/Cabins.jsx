import { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { getCabinStatus } from "../services/api";

const Cabins = () => {
  const [bookedCabins, setBookedCabins] = useState([]);

  useEffect(() => {
    const fetchCabins = async () => {
      const res = await getCabinStatus();
      setBookedCabins(res.data);
    };

    fetchCabins();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-6">Cabin Status</h2>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
        {[...Array(100)].map((_, i) => {
          const cabinNo = i + 1;
          const isBooked = bookedCabins.includes(cabinNo);

          return (
            <div
              key={cabinNo}
              className={`p-3 rounded text-center text-white font-semibold
                ${isBooked ? "bg-red-500" : "bg-green-500"}`}
            >
              Cabin {cabinNo}
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default Cabins;
