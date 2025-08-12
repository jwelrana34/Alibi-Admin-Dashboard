import { useState } from "react";
import adminImage from "../assets/images/admin.png";
import { useTranslation } from "react-i18next";
import { editProfileMessage } from "../data/Toast";

const EditProfileModal = ({ onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "Admin",
    email: "info.alibili@gmail.com",
    phone: "+214 256 256 2546",
    gender: "Male",
    dob: "1 May, 2000",
    address: "3rd Circle, Amman, Jordan",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      editProfileMessage(t("Profile Updated"));
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[1005] flex items-center justify-center">
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
            src={adminImage}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 object-cover border-white"
          />
        </div>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-6">
          <Field
            label={t("Name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Field
            label={t("Email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Field
            label={t("Phone")}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Field
            label={t("Gender")}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <Field
            label={t("Date of Birth")}
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <Field
            label={t("Address")}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-[#17202C] py-2 px-4 border text-[#FFFFFFCC] border-gray-700 rounded hover:bg-[#1f2a38]"
          onClick={handleSubmit}
        >
          {loading ? t("updating...") : t("Edit Profile")}
        </button>
      </div>
    </div>
  );
};

const Field = ({ label, name, value, onChange }) => (
  <div>
    <div className="text-gray-400 text-[12px]">{label}</div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[#17202C] pl-3 py-[7px] mt-1 border border-gray-700 rounded text-[13px] text-[#ffffffc2] focus:outline-none"
    />
  </div>
);

export default EditProfileModal;
