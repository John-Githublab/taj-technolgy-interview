import { Popconfirm, PopconfirmProps } from "antd";
import React from "react";
import Button from "../button/Button";

type deleteConfirm = {
  confirm: PopconfirmProps["onConfirm"];
  cancel: PopconfirmProps["onCancel"];
};

const DeleteConfirmation: React.FC = ({ confirm, cancel }: deleteConfirm) => (
  <Popconfirm
    title="Delete this Record"
    description="Are you sure to delete this Record?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger variant="dashed">Delete</Button>
  </Popconfirm>
);

export default DeleteConfirmation;
