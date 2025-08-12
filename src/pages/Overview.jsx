import DailyComplianceChart from "../components/adminDashboard/DailyComplianceChart";
import DashboardStatus from "../components/adminDashboard/StatusCard";
import RegionCharts from "../components/adminDashboard/RegionCharts";
import RecentAlerts from "../components/adminDashboard/RecentAlert";
import MiniMap from "../components/adminDashboard/MiniMap";

export default function Overview() {
  return (
    <div>
      <DashboardStatus />

      <div className="grid grid-cols-4 gap-4 mt-4 mb-8 2xl:gap-8">
        {/* Left side: 3 column span */}
        <div className="col-span-2 space-y-4 2xl:space-y-9 2xl:mt-5">
          <RecentAlerts />
          <DailyComplianceChart />
          <RegionCharts />
        </div>

        {/* Right side: MiniMap */}
        <div className="col-span-2 2xl:mt-5">
          <MiniMap userLocation={[31.9632, 35.9239]} />
        </div>
      </div>
    </div>
  );
}
