import {
  TeamOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ConfigApiUrl from "../config/ConfigApiUrl";
import { AuthContext } from "../provider/Auth";
import Helpers from "../utils/Helpers";
import TopBar from "./TopBar";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: [] = [
  {
    key: "user",
    icon: <UsergroupAddOutlined />,
    label: "Users",
    path: ConfigApiUrl.routerurls.user,
    isAdminAccess: true,
  },

  {
    key: "profile",
    icon: <UserOutlined />,
    label: "Profile",
    path: ConfigApiUrl.routerurls.userProfile,
  },
];

const Navigation: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const navigate = useNavigate();
  const lastPath = Helpers.getLastPath(location);
  const context = useContext(AuthContext);

  return (
    <Layout style={{ minHeight: "100vh" }} className="layout">
      <Sider
        className="bg-white shadow-md"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical flex justify-center mt-4 ">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            className="w-[32px]"
          />
        </div>
        <Menu
          theme="white"
          selectedKeys={[lastPath]}
          mode="inline"
          items={items?.filter(
            (value: any) => !value?.isAdminAccess || context?.role === "admin"
          )}
          className="mt-4"
          onClick={(item) => navigate(`${item?.item?.props?.path}`)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="h-12 shadow-lg"
        >
          <TopBar />
        </Header>
        <Content>
          <div
            style={{
              minHeight: 360,
              background: "white",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Dashboard at {new Date().getFullYear()} Created by John
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Navigation;
