import { useState } from "react";
import {
  Approve,
  File,
  Message,
  VidoeCall,
} from "../../assets/icons/RecentAlerts";
import { alerts } from "../../data/Data";
import { approve } from "../../data/Toast";
import RecentAlertModal from "../../modal/RecentAlertModal";
import RecentAlertChatModal from "../../modal/RecentAlertModalChart";
import RecentAlertVideoCallModal from "../../modal/RecentAlertVideoCallModal";
import UserModal from "../../modal/UserModal";
import { useTranslation } from "react-i18next";

export default function RecentAlerts() {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedChatUser, setSelectedChatUser] = useState(null);
  const [selectedVideoUser, setSelectedVideoUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="bg-[#0F131C] text-[#FFFFFFCC] rounded-xl w-full h-[285px] shadow-md border border-gray-800 min-[1920px]:h-[399px]">
      <h2 className="text-xl font-medium py-3 pl-6 border-b border-[#334155]">
        {t("Recent Alerts")}
      </h2>
      <div className="overflow-x-auto py-4 px-3 h-[250px] 2xl:h-[350px]">
        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <table className="min-w-full text-xs bg-[#0F131C] min-[1920px]:h-[310px]">
            <thead className="bg-[#0F131C] text-gray-300">
              <tr>
                <th className="text-left px-4 py-2 border-r border-gray-800">
                  {t("name")}
                </th>
                <th className="text-left px-4 py-1 border-r border-gray-800 2xl:text-center">
                  {t("Description")}
                </th>
                <th className="text-left px-4 py-1 2xl:text-center">
                  {t("Action")}
                </th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1e293b]/60 transition border-t border-gray-800"
                >
                  <td className="px-3 py-1 border-r border-gray-800">
                    <div
                      onClick={() => setSelectedUser(alert)}
                      className="flex items-center gap-2 2xl:gap-3 cursor-pointer"
                    >
                      <img
                        src={alert.avatar}
                        alt={alert.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-[#FFFFFFB2]">{t(alert.name)}</span>
                    </div>
                  </td>
                  <td className="px-3 py-1 border-r border-gray-800 text-[#FFFFFFB2] text-[12px] 2xl:text-center">
                    {t(alert.description)}
                  </td>
                  <td className="px-3 py-1">
                    <div className="flex gap-2 2xl:gap-5 2xl:justify-center">
                      <button
                        title={t("Approve")}
                        onClick={() => approve(t("Approved Successfully"))}
                      >
                        <Approve className="text-green-500 w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedFile(alert)}
                        title={t("Open File")}
                      >
                        <File className="text-purple-500 w-5 h-5" />
                      </button>
                      <button
                        title={t("Message")}
                        onClick={() => setSelectedChatUser(alert)}
                      >
                        <Message className="text-yellow-400 w-5 h-5" />
                      </button>
                      <button
                        title={t("Video Call")}
                        onClick={() => setSelectedVideoUser(alert)}
                      >
                        <VidoeCall className="text-yellow-400 w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* User Info Modal */}
      {selectedUser && (
        <RecentAlertModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
      {/* 💬 Chat Modal */}
      {selectedChatUser && (
        <RecentAlertChatModal
          user={selectedChatUser}
          onClose={() => setSelectedChatUser(null)}
        />
      )}
      {/* video model */}
      {selectedVideoUser && (
        <RecentAlertVideoCallModal
          user={selectedVideoUser}
          onClose={() => setSelectedVideoUser(null)}
        />
      )}
      {/* File Modal */}
      {selectedFile && (
        <UserModal user={selectedFile} onClose={() => setSelectedFile(null)} />
      )}
    </div>
  );
}
