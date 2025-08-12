import { useTranslation } from "react-i18next";

const RecentAlertModal = ({ user, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-1005 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#10131cb7] bg-opacity-60 animate-backdrop"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-[#161a25] text-white w-[450px] rounded-xl p-6 shadow-xl border-2 border-gray-700 mt-10 animate-modal">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user.avatar}
            alt={t("Profile")}
            className="w-20 h-20 rounded-full border-2 object-cover border-white"
          />
        </div>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Field label={t("Name")} value={t(user.name)} />
          <Field label={t("Role")} value={t("User")} />
          <Field label={t("Status")} value={t("Failed Check-In")} />
          <Field label={t("User ID")} value="DRN-02568" />
          <Field label={t("Alert Type")} value={t("Failed Check-In")} />
          <Field label={t("Date & Time")} value="01 Aug 2025, 14:32 PM" />
          <Field label={t("Location")} value="3rd Circle, Amman, Jordan" />
          <Field label={t("Device ID")} value="XAI2025" />
          <Field label={t("Last Login")} value="01 Aug 2025, 14:25 PM" />
          <Field label={t("Last Location")} value="2nd Circle, Amman, Jordan" />
          <Field label={t("Total Alerts (Last 30 Days)")} value="4" />
          <Field label={t("Flagged Violations")} value="2" />
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, value }) => (
  <div>
    <div className="text-gray-400 text-[12px] w-[300px]">{label}</div>
    <div className="bg-[#17202C] pl-3 py-[7px] mt-1 border border-gray-700 rounded text-[13px] text-[#ffffffc2]">
      {value}
    </div>
  </div>
);

export default RecentAlertModal;
