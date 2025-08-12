import { useState } from "react";
import { usermanagement } from "../../data/Data";
import UserModal from "../../modal/UserModal";
import { modalData } from "../../data/Data";
import { useTranslation } from "react-i18next";

const UserManageMentTable = () => {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    const additionalDetails = modalData.find((item) => item.id === user.id);
    const combinedData = { ...user, ...additionalDetails };
    setSelectedUser(combinedData);
  };

  return (
    <div className="bg-[#0F172A] rounded-md text-[#FFFFFFB2] min-[1920px]:h-[870px] min-[1920px]:mt-3 min-[1520px]:h-[600px] w-full overflow-auto mb-10">
      <table className="min-w-full w-full text-sm text-left min-[1920px]:h-[870px] min-[1520px]:h-[600px]">
        <thead className="bg-[#1E293B] text-[#FFFFFFCC]">
          <tr>
            <th className="py-4 min-[1920px]:py-9 px-4">{t("Face ID")}</th>
            <th className="py-4 px-4">{t("Name")}</th>
            <th className="py-4 px-4">{t("Violation Type")}</th>
            <th className="py-4 px-4">{t("Region")}</th>
            <th className="py-4 px-4">{t("Last Event")}</th>
            <th className="py-4 max-2xl:pr-10">{t("Risk")}</th>
            <th className="py-4 2xl:text-right 2xl:pr-21">{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          {usermanagement.map((user, index) => (
            <tr
              key={index}
              className="border-b border-[#1E293B] hover:bg-[#1e2536] transition"
            >
              <td className="py-2 px-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </td>
              <td className="py-2 px-4 whitespace-nowrap">{t(user.name)}</td>
              <td className="py-2 px-4 whitespace-nowrap">
                {t(user.violation)}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">{t(user.region)}</td>
              <td className="py-2 px-4 whitespace-nowrap">{t(user.date)}</td>
              <td className="py-2 max-2xl:pr-10 whitespace-nowrap">
                {t(user.risk)}
              </td>
              <td className="py-2 2xl:text-right 2xl:pr-5">
                <button
                  onClick={() => handleViewDetails(user)}
                  className="bg-[#1E293B] text-[#FFFFFFB2] px-4 py-1 rounded-lg border border-[#334155] hover:bg-[#2b3b51] transition"
                >
                  {t("View Details")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserManageMentTable;
