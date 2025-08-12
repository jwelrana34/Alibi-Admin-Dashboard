import { useTranslation } from "react-i18next";
import { anomalies } from "../../data/AnomalyAndAISuggestion";

const AnomalyCard = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#0f172a] h-93 min-[1920px]:h-[625px] text-[#FFFFFFCC] rounded-t-lg py-4 space-y-4 font-sans">
      <h2 className="text-lg font-semibold px-4 border-b border-gray-800 pb-3 min-[1920px]:pt-3 min-[1920px]:pb-6 min-[1920px]:text-xl">
        {t("Anomaly Detection")}
      </h2>

      {anomalies.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-800 text-sm min-[1920px]:text-lg relative space-y-2 pb-3 min-[1920px]:h-[165px] min-[1920px]:space-y-5"
        >
          <span className="absolute top-3 right-6 text-xs min-[1920px]:text-lg text-gray-400">
            {t(item.time)}
          </span>
          <p className="font-medium px-4">{t(item.title)}</p>
          <p className=" px-4 text-[#FFFFFF80]">
            {t("User ID")}: {item.userId}
          </p>
          <p className="text-gray-400 px-4">{t(item.message)}</p>
        </div>
      ))}
    </div>
  );
};

export default AnomalyCard;
