import { toast } from "sonner";

export const useNotification = () => {
  function notify(
    message: string,
    level: "success" | "error" | "info" | "warning",
  ) {
    switch (level) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
    }
  }

  return { notify };
};
