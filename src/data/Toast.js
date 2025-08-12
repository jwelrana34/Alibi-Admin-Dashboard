import toast from "react-hot-toast";

export const approve = (message) =>
  setTimeout(() => toast.success(message), 500);

export const message = () =>
  setTimeout(() => toast.success("Message Sent"), 500);

export const openFolder = () =>
  setTimeout(() => toast.success("File Opened"), 500);

export const successMessage = (message) => toast.success(message);

export const editProfileMessage = (message) => toast.success(message);
