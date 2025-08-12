import MonitoringTable from "../components/liveMonitoring/MonitoringTable";
import TamperAlertCard from "../components/liveMonitoring/TamplerAlertCard";
import ActionCard from "../components/liveMonitoring/ActionButton";

export default function LiveMonitoring() {
  return (
    <div className="my-6 min-[1920px]:my-10">
      <ActionCard />
      <MonitoringTable />
      <TamperAlertCard />
    </div>
  );
}
