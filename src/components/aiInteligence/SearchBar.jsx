import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const { t } = useTranslation();
  return (
    <nav className="bg-[#12151C] my-6 min-[1920px]:my-10 p-4 min-[1920px]:py-7 rounded-lg shadow-md border border-gray-800">
      <div className="flex items-center">
        <h2 className="text-lg pl-5 pr-10 font-medium text-[#FFFFFFCC]">
          {t("aiIntelligenceCenter")}
        </h2>
        <div className="flex w-[200px]">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("Search by name")}
              className="w-[330px] pl-4 pr-12 py-2 border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
