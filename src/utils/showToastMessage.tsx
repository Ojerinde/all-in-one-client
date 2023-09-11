import { toast } from "react-toastify";

const showToastMessage = (mode: string, message: string) => {
  switch (mode) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "warn":
      toast.warning(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.TOP_RIGHT,
        className: ``,
      });
  }
};

export default showToastMessage;
