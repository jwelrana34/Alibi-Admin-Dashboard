import { useState } from "react";
import { liveMonitoringData, modalData } from "../../data/Data";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const MonitoringTable = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredData =
    filter === "All"
      ? liveMonitoringData
      : liveMonitoringData.filter((user) => user.status === filter);

  const filterOptions = ["All", "On-Time", "Late", "Failed"];

  return (
    <>
      <div className="flex justify-between items-center mb-5 min-[1520px]:my-7 min-[1920px]:my-10">
        {/* Filter Buttons */}
        <div className="flex">
          {filterOptions.map((item, index, array) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-8 py-1.5 min-[1920px]:py-4 font-medium transition ${
                filter === item
                  ? "bg-[#F2B100] text-white rounded-md"
                  : `bg-[#1E293B] text-[#FFFFFFB2] hover:bg-[#334155] ${
                      index === 0
                        ? "rounded-l-md"
                        : index === array.length - 1
                        ? "rounded-r-md"
                        : ""
                    }`
              }`}
            >
              {t(item)}
            </button>
          ))}
        </div>

        {/* Dropdown Filter */}
        <div>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-[#090c12] border hover:bg-gray-700 border-[#334155] rounded-md py-2 min-[1920px]:py-4 pl-4 pr-10 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              {filterOptions.map((item) => (
                <option key={item} value={item}>
                  {t(item)}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="bg-[#0F172A] rounded-md text-[#FFFFFFB2] w-full overflow-auto mb-10 min-[1920px]:mb-13">
        {/* Table */}
        <table className="min-w-full w-full text-sm text-left min-[1520px]:h-[520px] min-[1920px]:h-[700px]">
          <thead className="bg-[#1E293B] text-[#FFFFFFCC]">
            <tr>
              <th className="py-4 min-[1520px]:py-5 min-[1920px]:py-7 px-4">
                {t("Face ID")}
              </th>
              <th className="py-4 px-4">{t("Name")}</th>
              <th className="py-4 px-4">{t("ID Number")}</th>
              <th className="py-4 px-4">{t("Check-In")}</th>
              <th className="py-4 px-4">{t("Location")}</th>
              <th className="py-4 px-4">{t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-[#1E293B] hover:bg-[#1e2536] transition"
              >
                <td className="py-2 px-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </td>
                <td className="py-2 px-4 whitespace-nowrap">{t(user.name)}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {t(user.idNumber)}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">{t(user.date)}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {t(user.location).slice(0, 32)} <br />
                  {t(user.location).slice(32)}
                </td>
                <td
                  className={`py-2 px-4 whitespace-nowrap ${
                    user.status === "On-Time"
                      ? "text-[#00BC00]"
                      : user.status === "Failed"
                      ? "text-[#FF0000B2]"
                      : "text-yellow-400"
                  }`}
                >
                  {t(user.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MonitoringTable;
