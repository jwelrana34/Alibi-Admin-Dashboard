import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function AnalysisHeading() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between items-center bg-[#0F131C] rounded-lg border border-gray-800 py-3 min-[1920px]:py-5 px-5 w-full mt-5 min-[1920px]:mb-4">
        <h2 className="font-medium text-[#FFFFFFCC]">
          {t("Analysis and Report")}
        </h2>

        <div className="relative">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none">
            <option value="">{t("Export Type")}</option>
            <option value="pdf">{t("PDF")}</option>
            <option value="csv">{t("CSV")}</option>
            <option value="excel">{t("Excel (XLSX)")}</option>
            <option value="json">{t("JSON")}</option>
            <option value="xml">{t("XML")}</option>
            <option value="png">{t("Image (PNG)")}</option>
          </select>
          <FiChevronDown className="absolute right-2 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* second row */}
      <div className="flex justify-between items-center rounded-xl py-5 w-full gap-4">
        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 min-[1920px]:py-5 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">{t("Start Date")}</option>
            <option value="today">{t("Today")}</option>
            <option value="yesterday">{t("Yesterday")}</option>
            <option value="last7">{t("Last 7 Days")}</option>
            <option value="last30">{t("Last 30 Days")}</option>
            <option value="thisMonth">{t("This Month")}</option>
            <option value="lastMonth">{t("Last Month")}</option>
            <option value="custom">{t("Custom Date")}</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-6  text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 min-[1920px]:py-5 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">{t("End Date")}</option>
            <option value="today">{t("Today")}</option>
            <option value="yesterday">{t("Yesterday")}</option>
            <option value="last7">{t("Last 7 Days")}</option>
            <option value="last30">{t("Last 30 Days")}</option>
            <option value="thisMonth">{t("This Month")}</option>
            <option value="lastMonth">{t("Last Month")}</option>
            <option value="custom">{t("Custom Date")}</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-6  text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 min-[1920px]:py-5 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">{t("Select User")}</option>
            <option value="allUser">{t("All Users")}</option>
            <option value="admin">{t("Admin")}</option>
            <option value="manager">{t("Manager")}</option>
            <option value="staff">{t("Staff")}</option>
            <option value="guest">{t("Guest")}</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-6 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
