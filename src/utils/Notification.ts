import { notification, NotificationPlacement } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export const openNotification = (
  title: string,
  description?: string,
  type: NotificationType = "success",
  placement?: NotificationPlacement,
  onClick?: () => void
) => {
  notification[type]({
    message: title,
    description: description,
    placement: placement,
    onClick: onClick,
  });
};
