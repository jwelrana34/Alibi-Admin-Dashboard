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
export default function ComplianceScore() {
  const { t } = useTranslation();
  const labels = [
    t("Region"),
    t("Region"),
    t("Region"),
    t("Region"),
    t("Region"),
    t("Region"),
    t("Region"),
  ];

  const weeklyData = [5, 6, 7.5, 9.5, 7.5, 6, 5];

  const chartData = {
    labels,
    datasets: [
      {
        data: weeklyData,
        backgroundColor: [
          "#A97C00",
          "#C28E00",
          "#DA9F00",
          "#F2B100",
          "#DA9F00",
          "#C28E00",
          "#A97C00",
        ],
        borderRadius: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
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
      padding: { top: 10, right: 10, left: 10, bottom: 0 },
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
        min: 2,
        max: 10,
        grid: {
          color: "#1F2937",
          lineWidth: 1,
          borderDash: [4, 4],
          drawBorder: false,
        },
        ticks: {
          color: "#FFFFFF80",
          font: { size: 13, family: "Inter, sans-serif" },
          stepSize: 2,
          padding: 8,
          callback: (value) => t(value.toString()),
        },
      },
    },
  };

  return (
    <div className="bg-[#0F131C] rounded-xl border border-gray-800 p-4 w-full shadow-sm h-[310px] min-[1520px]:h-[370px] min-[1920px]:h-[490px]">
      <h2 className="text-[#FFFFFFCC] text-lg mb-2 ml-2 font-medium">
        {t("Compliance Score")}
      </h2>
      <div className="mb-2" />
      <div className="h-[245px] min-[1520px]:h-[299px] min-[1920px]:h-[400px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
