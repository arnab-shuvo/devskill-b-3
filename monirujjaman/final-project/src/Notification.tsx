import { toast } from "react-toastify";

toast.configure();

export const enum NotificationType {
  info = 1,
  success = 2,
  warning = 3,
  error = 4,
  default = 5,
}

const Notification = (type: NotificationType, message: string) => {
  switch (type) {
    case NotificationType.info: {
      toast.info(message, { autoClose: 5000 });
      break;
    }
    case NotificationType.success: {
      toast.success(message, { autoClose: 5000 });
      break;
    }
    case NotificationType.warning: {
      toast.warning(message, { autoClose: 5000 });
      break;
    }
    case NotificationType.error: {
      toast.error(message, { autoClose: 5000 });
      break;
    }
    default: {
      toast(message, { autoClose: 5000 });
    }
  }
};

export default Notification;
