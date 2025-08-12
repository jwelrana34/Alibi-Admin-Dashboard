import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CaseReportBuilder() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState([
    t("User Data"),
    t("Media"),
    t("Evidence Files"),
  ]);

  const items = [
    t("User Data"),
    t("Logs"),
    t("Media"),
    t("Evidence Files"),
    t("Drone Video"),
    t("Investigation Timeline"),
  ];

  const toggleItem = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="bg-[#0F131C] text-[#FFFFFFCC] rounded-lg px-6 py-4 min-[1920px]:py-7 w-full mt-5 mb-10 border border-gray-800">
      <h2 className="text-md font-medium mb-4">{t("Case Report Builder")}</h2>
      <div className="flex justify-between flex-wrap gap-6">
        {items.map((item) => {
          const isChecked = selected.includes(item);
          return (
            <label
              key={item}
              className="flex items-center justify-between gap-2 cursor-pointer"
              onClick={() => toggleItem(item)}
            >
              <span
                className={`w-3 h-3 flex items-center justify-center rounded-sm border border-gray-500 
                  ${
                    isChecked
                      ? "bg-green-500 border-green-500"
                      : "bg-white border-gray-400"
                  }`}
              >
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
