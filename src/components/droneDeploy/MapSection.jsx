import { FiChevronDown } from "react-icons/fi";
import map from "../../assets/images/maps.png";
import { useTranslation } from "react-i18next";
export default function MapSection() {
  const { t } = useTranslation();
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="w-full">
        {/* Dropdowns */}
        <div className="bg-[#0F131C] p-2 min-[1920px]:py-3 min-[1920px]:px-3  rounded-md flex gap-4 mb-4 2xl:mb-7">
          <div className="relative w-full">
            <select className="bg-[#0B0E17] text-[#FFFFFFCC] p-2 min-[1920px]:py-4 rounded-md border border-gray-700 w-full appearance-none focus:outline-none cursor-pointer pl-4">
              <option>{t("Select User")}</option>
              <option value="Mira Al-Sayfani">{t("Mira Al-Sayfani")}</option>
              <option value="Salma Dahrani">{t("Salma Dahrani")}</option>
              <option value="Yousef Barqani">{t("Yousef Barqani")}</option>
              <option value="Noor Khandari">{t("Noor Khandari")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative w-full">
            <select className="bg-[#0B0E17] text-[#FFFFFFCC] p-2 rounded-md border border-gray-700 w-full min-[1920px]:py-4  appearance-none focus:outline-none cursor-pointer pl-4">
              <option>{t("select Badge")}</option>
              <option value="gold">{t("gold")}</option>
              <option value="silver">{t("silver")}</option>
              <option value="bronze">{t("bronze")}</option>
              <option value="platinum">{t("platinum")}</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 min-[1920px]:top-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Image container */}
        <div className="relative rounded-md overflow-hidden">
          {/* Live Tag */}
          <span className="absolute top-2 left-2 bg-[#FFFFFF4D] text-[#FFFFFF] text-xs px-2 py-1 rounded">
            Live
          </span>
          <img
            src={map}
            alt="Satellite"
            className="w-[100%] h-102.5 min-[1920px]:h-130 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
