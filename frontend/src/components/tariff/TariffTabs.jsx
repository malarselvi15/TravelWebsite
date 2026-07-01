import { useState } from "react";
import HourlyTariffTable from "./HourlyTariffTable";
import DayTariffTable from "./DayTariffTable";
import KmTariffTable from "./KmTariffTable";

function TariffTabs() {
  const [tab, setTab] = useState("hourly");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setTab("hourly")}
          className={`px-6 py-2 rounded-full font-semibold ${
            tab === "hourly"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200"
          }`}
        >
          Hour Basis
        </button>

        <button
          onClick={() => setTab("day")}
          className={`px-6 py-2 rounded-full font-semibold ${
            tab === "day"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200"
          }`}
        >
          Day Basis
        </button>

        <button
          onClick={() => setTab("km")}
          className={`px-6 py-2 rounded-full font-semibold ${
            tab === "km"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200"
          }`}
        >
          KM Basis
        </button>
      </div>

      {/* Content */}
      {tab === "hourly" && <HourlyTariffTable />}
      {tab === "day" && <DayTariffTable />}
      {tab === "km" && <KmTariffTable />}
    </div>
  );
}

export default TariffTabs;