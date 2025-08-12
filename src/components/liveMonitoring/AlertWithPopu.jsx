import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AlertWithPopup = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative text-white rounded-lg p-4">
      {/* Toggle Button */}
      <button
        onClick={() => setShowPopup((prev) => !prev)}
        className="px-2 py-1 bg-[#334155] text-white rounded hover:bg-[#475569]"
      >
        ⋮
      </button>

      {/* Popout Menu */}
      {showPopup && (
        <div className="absolute top-5 text-sm right-13 bg-[#0F172A] border border-gray-700 rounded-lg shadow-lg w-20 z-10">
          <button
            onClick={() => navigate("/dashboard/user_management")}
            className="w-full text-left px-4 py-2 transition"
          >
            {t("Open")}
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-[#1E293B] transition">
            {t("Ignore")}
          </button>
          <button
            onClick={() => setShowPopup(false)}
            className="w-full text-left px-4 py-2 hover:bg-[#1E293Btransition"
          >
            {t("Close")}
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertWithPopup;
