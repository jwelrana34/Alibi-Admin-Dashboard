import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { useTranslation } from "react-i18next";

const DailyComplianceChart = () => {
  const { t } = useTranslation();

  const data = [
    { x: 10, y: 40 },
    { x: 10, y: 30 },
    { x: 20, y: 60 },
    { x: 25, y: 37 },
    { x: 30, y: 70 },
    { x: 35, y: 50 },
    { x: 40, y: 50 },
    { x: 45, y: 70 },
    { x: 50, y: 47 },
    { x: 55, y: 80 },
    { x: 60, y: 60 },
    { x: 65, y: 60 },
    { x: 70, y: 90 },
    { x: 75, y: 67 },
    { x: 80, y: 77 },
    { x: 85, y: 70 },
    { x: 90, y: 65 },
    { x: 95, y: 60 },
    { x: 100, y: 80 },
  ];

  const formatTime = (value) => {
    const timeMap = {
      10: t("6am"),
      20: t("9am"),
      30: t("11am"),
      40: t("1pm"),
      50: t("3pm"),
      60: t("5pm"),
      70: t("7pm"),
      80: t("9pm"),
      90: t("11pm"),
      100: t("12am"),
    };
    return timeMap[value] || value;
  };
  return (
    <div className="bg-[#0F131C] pr-5 py-3 rounded-xl w-full h-[285px] min-[1920px]:h-[399px] border border-gray-800">
      <h2 className="text-[#FFFFFFCC] text-lg mb-6 ml-6 font-medium">
        {t("Daily Compliance")}
      </h2>
      <div className="min-[1920px]:h-[310px] h-[205px]">
        <ResponsiveContainer width="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: -14, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#333"
              strokeDasharray="0 0"
              vertical={false}
            />
            <XAxis
              dataKey="x"
              domain={[10, 100]}
              ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickFormatter={formatTime}
              tick={{
                fill: "#FFFFFF80",
                fontWeight: "500",
                fontSize: 12,
                dy: 7,
                dx: 10,
              }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              strokeOpacity={0}
              domain={[25, 100]}
              ticks={[25, 50, 75, 100]}
              tickFormatter={(value) => `${t(value.toString())}%`}
              tick={{ fill: "#FFFFFF80", fontWeight: "500", fontSize: 12 }}
              dy={-2}
            />
            <Tooltip
              content={<CustomTooltip />}
              contentStyle={{ backgroundColor: "#1F212C", borderColor: "#333" }}
            />
            <Area
              type="basis"
              dataKey="y"
              stroke="#FFD700"
              strokeWidth={3}
              fill="#FFD700"
              fillOpacity={0.1}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyComplianceChart;
