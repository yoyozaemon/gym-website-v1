import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = ({ type, message }) => {
  React.useEffect(() => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  }, [type, message]);

  return <ToastContainer />;
};

export default ToastNotification;
