import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div>
      <div className="flex justify-center gap-2 mb-2">
        <button
          onClick={() => changeLang("en")}
          className="px-2 py-1 bg-gray-700 rounded"
        >
          EN
        </button>
        <button
          onClick={() => changeLang("ar")}
          className="px-2 py-1 bg-gray-700 rounded"
        >
          AR
        </button>
      </div>

      <h1>{t("welcome")}</h1>
    </div>
  );
}
