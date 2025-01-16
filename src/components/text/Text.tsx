import React, { ReactNode } from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface TextProps {
  children: ReactNode; // Content to display inside the component
  level?: 1 | 2 | 3 | 4 | 5; // Heading levels supported by Ant Design (1 to 5)
  className?: string; // Optional CSS class names
  style?: React.CSSProperties; // Optional inline styles
}

const Text: React.FC<TextProps> = ({
  children,
  level = 1,
  className = "",
  style = {},
}) => {
  return (
    <Title level={level} className={className} style={style}>
      {children}
    </Title>
  );
};

export default Text;
