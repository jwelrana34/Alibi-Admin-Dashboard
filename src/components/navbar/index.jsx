import { Link } from "react-router-dom";
import logotwo from "../../assets/images/alibiLogo.jpg";
import adminImage from "../../assets/images/Ellipse 9 (5).png";
import { Search, Bell } from "lucide-react";
import { useState } from "react";
import EditProfileModal from "../../modal/EditProfile";
import NotificationModal from "../../modal/Notification";
import { useTranslation } from "react-i18next";

const DashboardMenu = () => {
  const [open, setOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
  };

  const handleEditProfileClose = () => {
    setIsEditOpen(false);
    setOpen(false);
  };

  return (
    <header className="w-full bg-[#000000] shadow-sm border-b border-gray-700 fixed top-0 z-1005">
      <div className="w-full px-4 sm:px-10 md:px-10 py-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-15">
            <div className="flex items-center h-14">
              <Link to="/dashboard/overview" className="flex items-center">
                <img
                  src={logotwo}
                  alt="Bahamas Logo"
                  className="h-9 sm:h-11 bg-black object-contain mt-2 sm:mt-0 rounded"
                />
              </Link>
              <h2 className="ml-6 font-bold text-lg sm:text-xl text-white">
                {t("ALIBI DALEL")}
              </h2>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-full w-[600px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("Search here...")}
                  className="w-full pl-4 pr-12 py-2 border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          {/* Notification & Profile */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              title="Notification"
              className={`relative p-3 rounded-full bg-[#17202C] ${
                isNotificationOpen ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <Bell className="text-white" size={24} />
              <span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 text-[8px] flex items-center justify-center rounded-full bg-red-500 text-black ring-2 ring-[#17202C]">
                {t("6")}
              </span>
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-[#000000] text-white px-3 py-2 rounded-full border border-gray-500"
              >
                <img
                  src={adminImage}
                  alt="Profile"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm hidden sm:block">{t("admin")}</span>
                <svg
                  className="w-4 h-4 ml-1 hidden sm:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0F131C] text-[#FFFFFFCC] rounded-md shadow-lg z-10 border border-gray-800">
                  <button
                    onClick={() => setIsEditOpen(true)}
                    className="block w-full py-2 text-start pl-4 hover:bg-[#1b212f]  hover:rounded-md"
                  >
                    {t("Profile")}
                  </button>

                  {/* Language Toggle Switch */}
                  <div className="flex justify-start items-center px-3 py-2">
                    <div
                      onClick={() => {
                        const newLang = i18n.language === "en" ? "ar" : "en";
                        changeLanguage(newLang);
                      }}
                      className={`relative w-15 h-5 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
                        i18n.language === "en"
                          ? "bg-[#FFFFFFCC]"
                          : "bg-[#ffffffa6]"
                      }`}
                    >
                      <div
                        className={`absolute w-5 h-5 bg-green-400 rounded-full shadow-md transform transition-transform duration-300 ${
                          i18n.language === "en"
                            ? "translate-x-0"
                            : "translate-x-10"
                        }`}
                      ></div>
                      <span className="absolute left-2 text-xs font-bold">
                        EN
                      </span>
                      <span className="absolute right-2 text-xs font-bold">
                        AR
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-[#1b212f]  hover:rounded-md"
                  >
                    {t("Logout")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isEditOpen && <EditProfileModal onClose={handleEditProfileClose} />}
      {isNotificationOpen && (
        <NotificationModal onClose={() => setIsNotificationOpen(false)} />
      )}
    </header>
  );
};

export default DashboardMenu;
