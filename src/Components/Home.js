import React from "react";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  BellOutlined,
  CheckSquareOutlined,
  MessageOutlined,
  LayoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
    document.querySelector(".logo").classList.toggle("logo_closed");
  };
  return (
    <div>
      <Layout className="doctoradmin_layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div>
            <p className="logo">Doctor admin</p>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<BellOutlined />}>
              Buyurtmalar
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckSquareOutlined />}>
              Davolanganlar
            </Menu.Item>
            <Menu.Item key="4" icon={<MessageOutlined />}>
              Xabarlar
            </Menu.Item>
            <Menu.Item key="5" icon={<LayoutOutlined />}>
              Shablonlar
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            id="doctoradmin_icon"
            style={{ padding: " 0 20px", color: "white", fontSize: "20px" }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => {
                  toggle();
                },
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
