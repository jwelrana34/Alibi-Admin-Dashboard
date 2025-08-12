import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { users } from "../data/Data";
import { useTranslation } from "react-i18next";

export default function BroadcastModal({ onClose }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");

  const handleSend = () => {
    if (!message) {
      alert(t("pleaseEnterMessage"));
      return;
    }

    setTimeout(() => {
      alert(t("broadcastSent", { audience: t(selectedOption) }));
      onClose();
    }, 1000);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 flex items-start pt-48 justify-center pl-70 bg-black/50 z-50 animate-backdrop">
      <div className="bg-[#161a25] p-6 rounded-lg w-[400px] shadow-lg animate-modal border border-gray-700">
        <h2 className="text-xl font-semibold text-[#FFFFFFCC] mb-4 text-center">
          {t("sendBroadcast")}
        </h2>

        {/* Select audience */}
        <div>
          <label className="text-gray-300 text-sm mb-2 block">
            {t("sendTo")}
          </label>
          <div className="relative">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-[#1e293b] text-[#FFFFFFCC] border border-gray-600 appearance-none cursor-pointer"
            >
              {users.map((user) => (
                <option
                  className="text-[#FFFFFFCC]"
                  key={user.id}
                  value={user.name}
                >
                  {t(user.name)}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Message textarea */}
        <label className="text-gray-300 text-sm mb-2 block">
          {t("message")}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("typeYourBroadcast")}
          className="w-full p-2 h-28 rounded bg-[#1e293b] text-white border border-gray-600 resize-none"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#f2000036] hover:bg-[#f200005c] text-white rounded  transition-colors duration-200"
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#00bc001f] hover:bg-[#00bc0058] text-white rounded disabled:opacity-50 transition-colors duration-200"
          >
            {t("send")}
          </button>
        </div>
      </div>
    </div>
  );
}
