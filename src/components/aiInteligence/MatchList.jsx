import { useState } from "react";
import { users } from "../../data/Data";
import { useTranslation } from "react-i18next";

const MatchesList = ({ searchTerm }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [decisions, setDecisions] = useState({}); // Track accept/reject per user

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleDecision = (index, decision) => {
    setDecisions((prev) => ({
      ...prev,
      [index]: decision,
    }));
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#12151C] text-[#FFFFFFCC] w-full sm:w-[260px] rounded-t-xl overflow-y-auto h-[700px] matches-list max-2xl:mb-5 min-[1920px]:mb-10 custom-scrollbar">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => {
          const isActive = index === activeIndex;
          const decision = decisions[index];
          return (
            <div
              key={index}
              className={`px-4 py-4 min-[1920px]:py-6 flex flex-col gap-2 border-b border-gray-700 cursor-pointer  transition-all duration-200
              ${isActive ? "bg-[#1e293b]" : "bg-[#0f172a]"}
              ${decision === "accepted" ? "border-green-500" : ""}
              ${decision === "rejected" ? "border-red-500" : ""}
            `}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-15 h-17 min-[1920px]:h-21 rounded-md object-cover"
                />
                <div className="">
                  <h3 className="font-semibold">{t(user.name)}</h3>
                  <p className="text-sm min-[1920px]:text-lg text-gray-400">
                    {t(user.score)}
                  </p>
                  <p className="text-sm text-gray-400">{t(user.time)}</p>
                  <p className="text-sm text-gray-400">{t(user.location)}</p>
                </div>
              </div>

              {/* Buttons or decision message */}
              {isActive && (
                <>
                  {!decision ? (
                    <div className="flex gap-3">
                      <button
                        className="bg-[#00bc001f] hover:bg-[#00bc0058] transition-colors duration-200 text-[#00BC00] py-1 w-3xl rounded border border-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecision(index, "accepted");
                        }}
                      >
                        {t("Accept")}
                      </button>
                      <button
                        className="bg-[#f2000036] hover:bg-[#f200005c] transition-colors duration-200 text-[#F20000B2] border border-gray-700 py-1 w-3xl rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecision(index, "rejected");
                        }}
                      >
                        {t("Reject")}
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`mt-1 text-sm font-medium ${
                        decision === "accepted"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {decision === "accepted"
                        ? t("✅ You accepted this user")
                        : t("❌ You rejected this user")}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })
      ) : (
        <div className="text-white text-center text-md mt-5 font-semibold">
          ❌ {t("No matches found!")}
        </div>
      )}
    </div>
  );
};

export default MatchesList;
