import { useState } from "react";
import { X, Copy, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EmergencyCallModal({ onClose }) {
  const { t } = useTranslation();
  const [toast, setToast] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(t("emergency.copied", { number: text }));
      setTimeout(() => setToast(""), 2000);
    });
  };

  return (
    <>
      <div className="fixed inset-0 items-start pt-48 justify-center pl-70 bg-black/70 flex z-50 p-4 animate-backdrop">
        <div className="bg-[#161a25] text-[#FFFFFFCC] rounded-lg shadow-lg max-w-md w-full p-6 relative border border-gray-700 animate-modal">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 hover:bg-gray-700 rounded border border-gray-700 transition-colors duration-200"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl mb-4">{t("emergency.title")}</h2>

          <p className="mb-4 text-gray-300">{t("emergency.description")}</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded hover:bg-gray-700">
              <div>
                <strong className="font-medium">
                  {t("emergency.police")}:
                </strong>{" "}
                999
                <p className="text-sm text-gray-400">
                  {t("emergency.callImmediateHelp")}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => copyText("999")}
                  className="hover:text-[#F2B100]"
                  title={t("emergency.copyNumber")}
                >
                  <Copy />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
              <div>
                <strong className="font-medium">
                  {t("emergency.fireDept")}:
                </strong>{" "}
                101
                <p className="text-sm text-gray-400">
                  {t("emergency.fireEmergency")}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => copyText("101")}
                  className="hover:text-[#F2B100]"
                  title={t("emergency.copyNumber")}
                >
                  <Copy />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
              <div>
                <strong className="font-medium">
                  {t("emergency.ambulance")}:
                </strong>{" "}
                102
                <p className="text-sm text-gray-400">
                  {t("emergency.medicalEmergency")}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => copyText("102")}
                  className="hover:text-[#F2B100]"
                  title={t("emergency.copyNumber")}
                >
                  <Copy />
                </button>
              </div>
            </div>

            <button
              onClick={() => alert(t("emergency.sendSMSAlert"))}
              className="w-full bg-[#F2B100] hover:bg-[#F2B100CC] transition-colors duration-200 text-white p-3 rounded font-medium"
            >
              <MessageSquare className="inline mr-2" size={18} />
              {t("emergency.sendSMSAlert")}
            </button>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white py-2 px-6 rounded shadow-lg z-60">
          {toast}
        </div>
      )}
    </>
  );
}
