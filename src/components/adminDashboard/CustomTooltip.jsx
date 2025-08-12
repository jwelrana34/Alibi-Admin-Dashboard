import { useTranslation } from "react-i18next";

const CustomTooltip = ({ active, payload, label }) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
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

    const timeLabel = timeMap[label] || label;
    const percentValue = `${payload[0].value}%`;

    return (
      <div className="bg-[#1F212C] border border-[#333] text-white px-3 py-2 rounded-md text-sm">
        <p>{timeLabel}</p>
        <p className="text-[#FFD700] font-medium">{percentValue}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
