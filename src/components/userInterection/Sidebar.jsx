import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function Sidebar() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const handleCallRequest = () => {
    if (!name) {
      alert(t("enterName"));
      return;
    }
    setTimeout(() => {
      alert(`${t("callRequest")} ${t(name)}`);
    }, 700);
  };

  const handleBroadCartRequest = () => {
    if (!note) {
      alert(t("enterNote"));
      return;
    }
    setTimeout(() => {
      alert(`${t("broadcastRequest")} ${t(name) || t("select")}`);
      setNote("");
    }, 700);
  };

  return (
    <div className="bg-[#0F131C] text-white py-4 border border-gray-800 w-full sm:w-64 space-y-3 rounded-lg">
      {/* Video Call */}
      <div className="space-y-3">
        <h2 className="text-md text-center text-[#FFFFFFCC] border-b border-gray-800 pb-2 font-semibold">
          {t("videoCall")}
        </h2>

        {/* Name */}
        <div className="px-3 mt-[-7px]">
          <label className="text-[#FFFFFFB2] text-sm">{t("name")}</label>
          <div className="relative">
            <select
              className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="Mira Al-Sayfani">{t("Mira Al-Sayfani")}</option>
              <option value="Salma Dahrani">{t("Salma Dahrani")}</option>
              <option value="Salma Dahrani">{t("Salma Dahrani")}</option>
              <option value="Noor Khandari">{t("Noor Khandari")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        {/* Video Call Button */}
        <div className="bg-[#0F131C] rounded-lg flex flex-col items-center justify-center pb-15 pt-5 border border-[#30363D] mx-3 relative">
          <svg
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="38" height="32" rx="6" fill="#2A2E37" />
            <path
              d="M24.7663 16.0228C24.7663 17.8748 24.763 19.7236 24.7663 21.5756C24.7729 23.6316 23.0163 25.2106 20.98 24.9771C20.8616 24.9639 20.7399 24.9606 20.6214 24.9606C16.9601 24.9606 13.2988 24.9606 9.63422 24.9573C9.10788 24.9573 8.5651 24.9935 8.05851 24.8784C6.40055 24.5001 5.31499 22.9013 5.51237 21.2105C5.52881 21.0822 5.52881 20.9506 5.52881 20.8223C5.52881 17.6709 5.52881 14.5195 5.52881 11.368C5.52881 10.7825 5.47618 10.1772 5.60118 9.61141C5.97291 7.9074 7.56178 6.82842 9.29539 7.0225C9.40395 7.03566 9.51579 7.03566 9.62435 7.03566C13.2955 7.03566 16.97 7.03566 20.6412 7.03566C21.1478 7.03566 21.6708 6.99619 22.1577 7.10474C23.7334 7.45015 24.7762 8.8252 24.7696 10.4371C24.763 12.299 24.7696 14.1576 24.7696 16.0195L24.7663 16.0228Z"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M32.5066 16.0096C32.5066 18.4374 32.5066 20.8651 32.5066 23.2928C32.5066 24.0494 32.1448 24.5658 31.477 24.6415C31.1677 24.6777 30.7664 24.6086 30.5263 24.4277C29.2894 23.4902 28.0854 22.5066 26.888 21.5197C26.7597 21.4144 26.6775 21.1809 26.6775 21.0098C26.6643 17.6676 26.6643 14.3254 26.6807 10.9864C26.6807 10.7891 26.8321 10.5391 26.99 10.4075C28.0953 9.49297 29.2236 8.60478 30.3388 7.70014C30.7796 7.34158 31.2533 7.19355 31.7862 7.45013C32.3191 7.70343 32.5099 8.15411 32.5099 8.72649C32.5033 11.1542 32.5099 13.5819 32.5099 16.0096H32.5066Z"
              fill="white"
              fillOpacity="0.7"
            />
          </svg>
          <span className="text-xs text-[#FFFFFFB2] mt-1">
            {t("videoCall")}
          </span>
          <button
            onClick={handleCallRequest}
            className="w-full absolute bottom-0 left-0 bg-[#17202C] text-[#FFFFFFB2] rounded-b px-3 py-2 text-sm hover:bg-[#1E242E] transition"
          >
            {t("requestCall")}
          </button>
        </div>
      </div>

      {/* Broadcast Alert */}
      <div className="space-y-2">
        <h2 className="text-lg text-center border-t border-b border-gray-800 text-[#FFFFFFCC] py-1">
          {t("broadcastAlert")}
        </h2>

        {/* Region */}
        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm">{t("region")}</label>
          <div className="relative">
            <select className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer">
              <option value="">{t("select")}</option>
              <option value="North">{t("north")}</option>
              <option value="South">{t("south")}</option>
              <option value="East">{t("east")}</option>
              <option value="West">{t("west")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        {/* User Type */}
        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm">{t("userType")}</label>
          <div className="relative">
            <select className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer">
              <option value="">{t("select")}</option>
              <option value="Admin">{t("admin")}</option>
              <option value="Moderator">{t("moderator")}</option>
              <option value="Member">{t("member")}</option>
              <option value="Guest">{t("guest")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        {/* Note */}
        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm">{t("note")}</label>
          <textarea
            className="w-full text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] h-16 resize-none"
            placeholder={t("typeHere")}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleBroadCartRequest}
          className="w-[88%] ml-4 bg-[#17202C] text-[#FFFFFFCC] rounded px-3 py-2 text-sm hover:bg-[#1E242E] transition"
        >
          {t("send")}
        </button>
      </div>
    </div>
  );
}
