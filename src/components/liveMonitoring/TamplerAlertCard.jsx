import { AlertTriangle } from "lucide-react";
import AlertWithPopup from "./AlertWithPopu";
import { useTranslation } from "react-i18next";

export default function TamperAlertCard() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-md px-4 py-2 min-[1920px]:py-5 text-white w-full flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-4 mb-15">
      {/* Left icon */}
      <div className="text-yellow-400 flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-6 ">
        <AlertTriangle size={44} />
        <div className="font-semibold text-white text-lg">
          {t("Tamper Alert")}
        </div>
      </div>

      {/* Info section */}
      <div className="flex flex-row gap-8 items-center 2xl:gap-60 md:col-span-2">
        <div>
          <div>
            <span className="text-white font-medium">{t("Name")}:</span>{" "}
            {t("Mira Al-Sayari")}
          </div>
          <div>
            <span className="text-white font-medium">{t("Issue")}:</span>{" "}
            {t("Strap tampering detected")}
          </div>
        </div>

        <div>
          <div>
            <span className="text-white font-medium">{t("Location")}:</span>{" "}
            {t("Amman, Jordan")}
          </div>
          <div>
            <span className="text-white font-medium">
              {t("Time of Detection")}:
            </span>{" "}
            {t("14 minutes ago")}
          </div>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex justify-start md:justify-end items-center">
        <button className="bg-[#1E293B] text-white px-4 py-[5px] rounded-md text-md hover:bg-[#334155]">
          {t("Auto-Escalate")}
        </button>
        <div className=" flex items-center justify-center">
          <span className="text-white text-xl">
            <AlertWithPopup />
          </span>
        </div>
      </div>
    </div>
  );
}
