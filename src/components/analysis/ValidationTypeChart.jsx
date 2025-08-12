import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const ViolationTypeChart = () => {
  const { t } = useTranslation();

  // Use translation keys here
  const labels = [t("Security"), t("FollowUp"), t("Other"), t("Safety")];

  const data = {
    labels,
    datasets: [
      {
        data: [25, 10, 10, 55],
        backgroundColor: ["#7275F1", "#988AE8", "#77D9DE", "#F2B100"],
        borderWidth: 0,
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    afterDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        chart.getDatasetMeta(datasetIndex).data.forEach((arc, index) => {
          const { x, y } = arc.tooltipPosition();
          const value = dataset.data[index];
          ctx.fillStyle = "#fff";
          ctx.font = "bold 13px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`${value}%`, x, y);
        });
      });
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#FFFFFFCC",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 6,
          boxHeight: 6,
          padding: 40,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-[#0F131C] p-4 rounded-xl border border-gray-800 w-full h-[310px] min-[1520px]:h-[370px] min-[1920px]:h-[490px]">
      <h2 className="text-[#FFFFFFCC] text-xl font-semibold mb-5 mt-1 pl-3">
        {t("Violation Type")}
      </h2>
      <div className="h-[225px] min-[1520px]:h-[299px] min-[1920px]:h-[400px]">
        <Pie data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default ViolationTypeChart;
