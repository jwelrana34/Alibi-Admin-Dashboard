import { FaUsers, FaExclamationTriangle } from "react-icons/fa";
import Setting from "../../assets/icons/Setting";
import { Link } from "react-router-dom";
import { DroneDeployment } from "../../assets/icons/Overview";
import { useTranslation } from "react-i18next";

const StatusCard = ({ icon, label, value, path }) => (
  <Link to={path}>
    <div className="bg-[#0F131C] text-[#FFFFFFCC] px-5 py-4 min-[1920px]:py-7 rounded-lg flex items-center gap-4 shadow-md w-full border border-gray-800">
      <div className="text-2xl text-[#FFFFFFCC]">{icon}</div>
      <div>
        <p className="text-sm text-[#FFFFFF80] font-medium">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </Link>
);

export default function DashboardStatus() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-4 gap-4 my-5 2xl:mt-8 2xl:gap-6">
      <StatusCard
        icon={<FaUsers />}
        label={t("Active Users")}
        value={t("09")}
        path="/dashboard/user_interection"
      />
      <StatusCard
        icon={<FaExclamationTriangle />}
        label={t("Flagged Violations")}
        value={t("10")}
        path="/dashboard/user_management"
      />
      <StatusCard
        icon={<DroneDeployment />}
        label={t("Drone Missions")}
        value={t("16")}
        path="/dashboard/drone_deployee"
      />
      <StatusCard
        icon={<Setting />}
        label={t("System Status")}
        value={t("Healthy")}
        path="/dashboard/analysis"
      />
    </div>
  );
}
