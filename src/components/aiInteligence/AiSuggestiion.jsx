import { useTranslation } from "react-i18next";
import { aiSuggestions } from "../../data/AnomalyAndAISuggestion";

const AISuggestion = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-93  min-[1920px]:h-[625px] bg-[#0f172a] text-[#FFFFFFCC] rounded-t-lg py-4 space-y-4 font-sans">
      <h2 className="text-lg font-semibold px-4 border-b border-gray-800 pb-3 min-[1920px]:pt-3 min-[1920px]:pb-6 min-[1920px]:text-xl">
        {t("AI Suggestions")}
      </h2>

      {aiSuggestions.map((suggest, index) => (
        <div
          key={index}
          className="border-b border-gray-800 text-sm relative space-y-2 pb-3 min-[1920px]:h-[165px] min-[1920px]:space-y-5"
        >
          <span className="absolute top-3 right-6 text-xs min-[1920px]:text-lg text-[#FFFFFF80]">
            {t(suggest.time)}
          </span>
          <p className="font-medium px-4">{t(suggest.title)}</p>
          <p className="text-[#FFFFFF80] px-4">
            {t("User ID")}: {suggest.userId}
          </p>
          <p className="text-[#FFFFFF80] px-4">{t(suggest.message)}</p>
        </div>
      ))}
    </div>
  );
};

export default AISuggestion;
