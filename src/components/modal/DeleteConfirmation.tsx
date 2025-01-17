import { Popconfirm, PopconfirmProps } from "antd";
import React from "react";
import Button from "../button/Button";
import { DeleteOutlined } from "@ant-design/icons";

type deleteConfirm = {
  confirm: PopconfirmProps["onConfirm"];
  cancel: PopconfirmProps["onCancel"];
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hasComponent?: boolean;
};

const Confirmation: React.FC = ({
  confirm,
  cancel,
  title,
  description,
  children,
  hasComponent = false,
}: deleteConfirm) => (
  <Popconfirm
    title={title || "Delete this Record"}
    description={description || "Are you sure to delete this Record?"}
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    {hasComponent ? (
      children
    ) : (
      <Button variant="dashed" className="!py-4 px-3  font-semibold">
        <DeleteOutlined /> Delete
      </Button>
    )}
  </Popconfirm>
);

export default Confirmation;
