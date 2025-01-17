import React from "react";
import { Modal, Button } from "antd";
import Text from "../text/Text";

interface ReusableModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  okText?: string;
  cancelText?: string;
  children: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  setOpen,
  title,
  okText = "OK",
  cancelText = "Cancel",
  children,
  onOk,
  onCancel,
}) => {
  const handleOk = () => {
    if (onOk) onOk();
    setOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    setOpen(false);
  };

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;
