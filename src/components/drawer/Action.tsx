import { Space } from "antd";
import React from "react";
import Button from "../button/Button";

const Action = ({ actions }: any) => {
  return (
    <Space>
      {actions?.map((value) => (
        <Button
          key={value?.label}
          onClick={value?.onClick}
          type={value?.primary ? "button" : "reset"}
        >
          {value?.label}
        </Button>
      ))}
    </Space>
  );
};

export default Action;
