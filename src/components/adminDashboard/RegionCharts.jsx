import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function IncomeOverTimeChart() {
  const { t } = useTranslation();

  // Translate labels dynamically using t()
  const labels = [
    t("Al-Qasaba"),
    t("Marka"),
    t("Al-Qwesmeh"),
    t("al-Jāmiʻah"),
    t("Wadi Al Seer"),
  ];

  const weeklyData = [8, 7, 6, 4, 8];

  const chartData = {
    labels,
    datasets: [
      {
        data: weeklyData,
        backgroundColor: [
          "#F2B100",
          "#DA9F00",
          "#C28E00",
          "#A97C00",
          "#F2B100",
        ],
        borderRadius: 0,
        barPercentage: 0.4,
        categoryPercentage: 0.6,
        borderSkipped: false,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#805AD5",
        bodyColor: "#805AD5",
        borderColor: "#E9D8FD",
        borderWidth: 0,
        padding: 8,
        displayColors: false,
      },
    },
    layout: {
      padding: { top: 10, right: 10, left: 10, bottom: -5 },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#A0AEC0",
          font: { size: 13, family: "Inter, sans-serif" },
          padding: 15,
        },
      },
      y: {
        min: 0,
        max: 9,
        grid: {
          color: "#1F2937",
          lineWidth: 1,
          borderDash: [4, 4],
          drawBorder: false,
        },
        ticks: {
          color: "#FFFFFF80",
          font: { size: 13, family: "Inter, sans-serif" },
          stepSize: 3,
          callback: (value) => value,
          padding: 8,
          callback: (value) => t(value.toString()),
        },
      },
    },
  };

  return (
    <div className="bg-[#0F131C] rounded-xl border border-gray-800 px-4 pt-4 w-full h-[287px] min-[1920px]:h-[399px] shadow-sm">
      <h2 className="text-[#FFFFFFCC] text-lg mb-2 ml-2 font-medium">
        {t("Missed Check-ins per Region")}
      </h2>
      <div className="" />
      <div className="h-[230px] min-[1920px]:h-[315px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
