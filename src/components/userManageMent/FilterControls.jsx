import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const FilterControls = () => {
  const { t } = useTranslation();
  const [violation, setViolation] = useState(t("Unauthorized Access"));
  const [region, setRegion] = useState(t("East Amman"));
  const [risk, setRisk] = useState(50);

  return (
    <div className="bg-[#0F172A] p-4 min-[1920px]:py-7 rounded-md text-white w-full mb-6 mt-6 border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Violation Type */}
        <div>
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium">
            {t("Violation Type")}
          </label>
          <div className="relative">
            <select
              value={violation}
              onChange={(e) => setViolation(e.target.value)}
              className="w-full bg-[#090c12] border border-[#334155] rounded-md py-2 pl-4 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              <option>{t("Unauthorized Access")}</option>
              <option>{t("Unauthorized Login")}</option>
              <option>{t("Location Mismatch")}</option>
              <option>{t("Device Breach")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium">
            {t("Region")}
          </label>
          <div className="relative">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-[#090c12] border border-[#334155] rounded-lg py-2 pl-4 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              <option>{t("East Amman")}</option>
              <option>{t("West Amman")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Risk Slider */}
        <div>
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium">
            {t("Risk Slider")}
          </label>
          <div className="flex items-center gap-2 w-full bg-[#090c12] border border-[#334155] rounded-lg py-[10px] px-4 text-sm text-white focus:outline-none">
            <span className="text-xs text-gray-400">{t("0")}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              className="w-full accent-yellow-400 bg-[#1E293B]"
            />
            <span className="text-xs text-gray-400">{t("100")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
