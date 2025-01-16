import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Helpers from "../utils/Helpers";
import ConfigApiUrl from "../config/ConfigApiUrl";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: [] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Users",
    path: ConfigApiUrl.routerurls.user,
  },
  {
    key: "1",
    icon: <TeamOutlined />,
    label: "Team",
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
      { key: "13", label: "Option 3" },
      { key: "14", label: "Option 4" },
    ],
  },
  {
    key: "2",
    icon: <FileOutlined />,
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
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="mt-4"
          onClick={(item) => navigate(`${item?.item?.props?.path}`)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="h-12"
        />
        <Content>
          <div
            style={{
              minHeight: 360,
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
