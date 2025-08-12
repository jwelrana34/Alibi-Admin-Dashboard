import { Megaphone, PhoneCall, ArrowUpRight } from "lucide-react";
import Drone from "../../assets/icons/Drone";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BroadcastModal from "../../modal/BroadCastModal";
import EmergencyCallModal from "../../modal/EmergencyCallModal";
import { useTranslation } from "react-i18next";

const ActionCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const cardBaseClasses =
    "flex items-center justify-between gap-2 bg-[#1E293B] text-white/70 px-4 py-4 min-[1920px]:py-7 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#334155] hover:text-white";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
      {/* Deploy Drone */}
      <div
        onClick={() => navigate("/dashboard/drone_deployee")}
        className={`${cardBaseClasses}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            <Drone size={18} />
          </span>
          <span className="text-md ml-2 font-medium">{t("Deploy Drone")}</span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>

      {/* Send Broadcast */}
      <div onClick={() => setIsOpen(true)} className={`${cardBaseClasses}`}>
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            <Megaphone size={24} />
          </span>
          <span className="text-md ml-2 font-medium">
            {t("Send Broadcast")}
          </span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>

      {/* Emergency Call */}
      <div onClick={() => setIsOpen2(true)} className={`${cardBaseClasses}`}>
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            <PhoneCall size={24} />
          </span>
          <span className="text-md ml-2 font-medium">
            {t("Emergency Call")}
          </span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>
      {isOpen && <BroadcastModal onClose={() => setIsOpen(false)} />}
      {isOpen2 && <EmergencyCallModal onClose={() => setIsOpen2(false)} />}
    </div>
  );
};

export default ActionCard;
