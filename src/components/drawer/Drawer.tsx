import React from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";

interface DrawerStackProps
  extends Pick<DrawerProps, "onClose" | "open" | "placement"> {
  children?: React.ReactNode; // Optional children for content inside the Drawer
  title: string | React.ReactNode;
  extra?: any;
}

const DrawerStack: React.FC<DrawerStackProps> = ({
  onClose,
  open,
  placement,
  children,
  title,
  extra,
}) => {
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={extra}
      >
        {children}
      </Drawer>
    </>
  );
};

export default DrawerStack;
