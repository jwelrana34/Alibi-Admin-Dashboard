import { useState } from "react";
import { Bell, X } from "lucide-react";
import { notifications } from "../data/Notification";
import { useTranslation } from "react-i18next";

export default function NotificationModal({ onClose }) {
  const [items, setItems] = useState(notifications);
  const { t } = useTranslation();

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 z-1005 flex items-start justify-end p-6 pt-20"
      onClick={onClose}
    >
      <div
        className="flex flex-col max-h-[90vh] overflow-y-auto rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-80 bg-[#10141D] text-[#FFFFFFE5] px-4 py-4 border-b border-gray-700 shadow-lg animate-modal hover:bg-gray-800 cursor-default"
          >
            {/* Close Button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-1 right-1 bg-[#17202C] text-gray-300 hover:text-gray-500 transition rounded-md p-[1px] border border-gray-600"
            >
              <X size={16} />
            </button>

            {/* Notification Content */}
            <div className="flex gap-3">
              <Bell size={20} className="text-white mt-1" />
              <div>
                <div className="flex gap-4 justify-between items-center">
                  <p className="font-semibold text-sm">{t(item.title)}</p>
                  <p className="text-[11px] text-gray-400">{t(item.time)}</p>
                </div>
                <p className="text-xs text-gray-300">{t(item.message)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
