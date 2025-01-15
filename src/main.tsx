import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
