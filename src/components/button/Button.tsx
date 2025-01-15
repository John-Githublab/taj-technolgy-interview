import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: any;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  type = "submit",
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
