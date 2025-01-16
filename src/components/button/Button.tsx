import React from "react";
import { Button as ANTDButton } from "antd";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  variant?: "text" | "link" | "default" | "primary" | "dashed" | undefined;
  disabled?: boolean;
  children?: any;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  type = "submit",
  variant = "primary",
  disabled = false,
  children,
  ...props
}) => {
  return (
    <ANTDButton
      htmlType={type}
      type={variant}
      disabled={disabled}
      className={`w-full  bg-[#1677FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </ANTDButton>
  );
};

export default Button;
