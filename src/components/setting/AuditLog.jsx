import { logs } from "../../data/Setting";
import { useTranslation } from "react-i18next";

const AuditLog = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0F131C] pt-4 pb-2 rounded-md w-full border border-gray-800">
      <h2 className="text-[#FFFFFFCC] text-lg border-b px-6 border-gray-700 pb-3 min-[1920px]:py-4 font-semibold">
        {t("Audit Log")}
      </h2>
      <table className="w-full text-left border-collapse min-[1920px]:h-80">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-[#FFFFFFCC] py-2 min-[1920px]:py-5 px-6 font-medium text-md">
              {t("Timestamp")}
            </th>
            <th className="text-[#FFFFFFCC] py-2 min-[1920px]:py-4 px-6 font-medium text-md">
              {t("User")}
            </th>
            <th className="text-[#FFFFFFCC] 2xl:pl-20 py-2 min-[1920px]:py-4 px-6 font-medium text-md">
              {t("Action")}
            </th>
            <th className="text-[#FFFFFFCC] py-2 px-6 min-[1920px]:py-4 2xl:text-right 2xl:pr-9 font-medium text-md">
              {t("IP Address")}
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <td className="py-2 px-6 text-[#FFFFFF99] text-sm">
                {t(log.timestamp)}
              </td>
              <td className="py-2 px-6 text-[#FFFFFF99] text-sm">
                {t(log.user)}
              </td>
              <td className="py-2 px-6 2xl:pl-20 text-[#FFFFFF99] text-sm">
                {t(log.action)}
              </td>
              <td className="py-2 px-6 2xl:text-right 2xl:pr-8 text-[#FFFFFF99] text-sm">
                {log.ip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;
