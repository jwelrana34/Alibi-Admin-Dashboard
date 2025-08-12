import React, { useState } from "react";
import { roles } from "../../data/Setting";
import { useTranslation } from "react-i18next";

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`w-10 h-5 flex items-center  rounded-full p-0.5 transition-colors duration-300 ${
      enabled ? "bg-green-500" : "bg-gray-700"
    }`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
        enabled ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const RoleAssignment = () => {
  const { t } = useTranslation();
  const [permissions, setPermissions] = useState({
    admin: Array(7).fill(true),
    supervisor: Array(5).fill(true),
    user: Array(2).fill(true),
  });

  const togglePermission = (role, index) => {
    setPermissions((prev) => {
      const updated = [...prev[role]];
      updated[index] = !updated[index];
      return { ...prev, [role]: updated };
    });
  };

  return (
    <div className="bg-[#0F131C] py-4 rounded-lg w-full border border-gray-800 h-[630px] min-[1920px]:h-[820px] mb-10 text-[#FFFFFFCC] font-sans">
      <h2 className="text-lg text-[#FFFFFFCC] font-semibold pl-7 2xl:pl-13 border-b border-gray-700 pb-4 min-[1920px]:py-7">
        {t("Role Assignment")}
      </h2>
      <table className="w-full border-collapse text-sm min-[1920px]:h-[400px]">
        <thead>
          <tr className="border-b border-gray-700">
            <th className=" py-4 pl-7 min-[1920px]:py-7 text-[15px] 2xl:pl-13 text-left font-medium">
              {t("Role")}
            </th>
            <th className=" py-3 pl-44 2xl:pl-80 text-[15px] text-left font-medium">
              {t("Permissions")}
            </th>
            <th className=" py-3 pl-7 text-[15px] text-left font-medium">
              {t("Action")}
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <React.Fragment key={role.role}>
              {role.permissions.map((perm, permIndex) => (
                <tr
                  key={permIndex}
                  className={
                    permIndex === role.permissions.length - 1
                      ? "border-b border-gray-700 pt-4 last:border-none "
                      : ""
                  }
                >
                  {permIndex === 0 && (
                    <td
                      rowSpan={role.permissions.length}
                      className="py-3 pl-7 min-[1920px]:py-7 2xl:pl-13 font-medium text-[#FFFFFFCC] whitespace-nowrap align-top mb-6 text-[14.5px]"
                    >
                      {t(role.role)}
                    </td>
                  )}
                  <td className="py-2 pl-44 2xl:pl-80 min-[1920px]:py-3 text-[#FFFFFF99]">
                    {t(perm)}
                  </td>
                  <td className="py-2 pl-10 mb-6">
                    <ToggleSwitch
                      enabled={permissions[role.key][permIndex]}
                      onToggle={() => togglePermission(role.key, permIndex)}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleAssignment;
