import { useState } from "react";
import AISuggestion from "../components/aiInteligence/AiSuggestiion";
import AnomalyCard from "../components/aiInteligence/AnomalyCard";
import MatchesList from "../components/aiInteligence/MatchList";
import SearchBar from "../components/aiInteligence/SearchBar";

export default function AIIntelligence() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Top Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main content layout */}
      <div className="flex flex-1 gap-6 2xl:gap-10 mt-3 overflow-hidden">
        {/* Sidebar */}
        <aside className="">
          <MatchesList searchTerm={searchTerm} />
        </aside>

        {/* Main content */}
        <main className="flex flex-1 gap-4 2xl:gap-9">
          <div className="flex-1">
            <AnomalyCard />
          </div>
          <div className="flex-1">
            <AISuggestion />
          </div>
        </main>
      </div>
    </div>
  );
}
