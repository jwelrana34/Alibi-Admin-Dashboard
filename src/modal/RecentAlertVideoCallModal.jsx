import { X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RecentAlertVideoCallModal({ user, onClose }) {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);

  const toggleMute = () => setIsMuted((prev) => !prev);
  const toggleCamera = () => setCameraOn((prev) => !prev);

  return (
    <div className="fixed inset-0 bg-black/50 z-1005 flex items-center justify-center animate-backdrop">
      <div className="bg-[#10141D] rounded-lg w-[400px] md:w-[500px] p-6 relative animate-modal border-2 border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#17202C] text-gray-300 hover:text-gray-500 transition rounded-md p-[1px] border border-gray-600"
        >
          <X size={20} />
        </button>

        <h3 className="text-[#F2B100] text-lg text-center font-semibold mb-3">
          {t("videoCallWith", { name: t(user.name) })}
        </h3>

        <div className="flex flex-col items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
          />

          <div className="w-full h-40 bg-black border border-gray-600 rounded flex items-center justify-center text-gray-400 text-sm">
            {cameraOn ? t("liveVideoStream") : t("cameraOff")}
          </div>

          <div className="flex gap-3 mt-4">
            {/* End Call */}
            <button
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium"
              onClick={onClose}
            >
              {t("endCall")}
            </button>

            {/* Mute */}
            <button
              onClick={toggleMute}
              className={`${
                isMuted ? "bg-yellow-700" : "bg-gray-600"
              } hover:bg-gray-700 px-4 py-2 rounded text-white font-medium`}
            >
              {isMuted ? t("unmute") : t("mute")}
            </button>

            {/* Toggle Camera */}
            <button
              onClick={toggleCamera}
              className={`${
                !cameraOn ? "bg-yellow-700" : "bg-gray-600"
              } hover:bg-gray-700 px-4 py-2 rounded text-white font-medium`}
            >
              {cameraOn ? t("turnCameraOff") : t("turnCameraOn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
