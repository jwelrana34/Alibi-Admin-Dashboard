import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const DeploymentMode = () => {
  const { t } = useTranslation();
  const [retention, setRetention] = useState("30");

  const handleToggle = (value) => {
    setRetention(value);
  };

  return (
    <div className="bg-[#0F131C] py-4 rounded-lg w-full text-[#FFFFFFCC] font-sans border border-gray-800 min-[1920px]:h-102">
      {/* Title */}
      <h2 className="text-lg font-semibold pl-4 mb-4 min-[1920px]:pb-6 min-[1920px]:pt-2 border-b border-gray-700 pb-3">
        {t("Deployment Mode")}
      </h2>

      {/* Dropdown */}
      <div className="px-3 min-[1920px]:py-2 min-[1920px]:px-6">
        <div className="relative">
          <select
            className="w-full bg-transparent border border-gray-700 rounded-md pl-3 py-2 min-[1920px]:py-4 text-[#FFFFFFCC] text-sm focus:outline-none focus:border-gray-500 appearance-none"
            defaultValue="Cloud"
          >
            <option className="bg-[#0f172a]">{t("Cloud")}</option>
            <option className="bg-[#0f172a]">{t("On-Premise")}</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Data Retention */}
      <h3 className="text-[#FFFFFFCC] text-sm min-[1920px]:text-md text-center my-2.5 min-[1920px]:py-4">
        {t("Data Retention")}
      </h3>

      <div className="space-y-3 min-[1920px]:space-y-6 min-[1920px]:px-6">
        {[
          { label: t("30 Days"), value: "30" },
          { label: t("90 Days"), value: "90" },
          { label: t("1 Year"), value: "365" },
        ].map((item) => (
          <div
            key={item.value}
            className="flex items-center justify-between px-3 text-[#FFFFFF99] text-sm"
          >
            <span>{item.label}</span>
            <button
              onClick={() => handleToggle(item.value)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
                retention === item.value ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
                  retention === item.value ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeploymentMode;
