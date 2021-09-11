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
import Avatar from "antd/lib/avatar/avatar";
import AvatarImg from "../Images/avatarimg.jpg";
import { Footer } from "antd/lib/layout/layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "../routes/routes";
import Dashboard from "../pages/Dashboard";
const { Header, Sider, Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
    document.querySelector(".logo").classList.toggle("logo_closed");
  };
  return (
    <div>
      <Router>
        <Layout className="doctoradmin_layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div>
              <p className="logo">Doctor admin</p>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
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
              style={{ padding: " 0 20px", position: "relative" }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  id: "doctoradmin_icon",
                  style: { color: "white", fontSize: "20px" },
                  onClick: () => {
                    toggle();
                  },
                }
              )}
              <div className="avatar_bell">
                <div className="increament_div">
                  <div className="icon_sup">
                    <div className="icon_bell">
                      <BellOutlined />
                    </div>
                    <div className="doctor_sup">0</div>
                  </div>
                </div>
                <div className="avatar_div">
                  <Avatar
                    style={{ backgroundColor: "white", cursor: "pointer" }}
                    size={40}
                    src={AvatarImg}
                  />
                </div>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                {/* {routes.map((item) => (
                  <Route path={item.path} exact component={item.component} />
                ))} */}
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Home;
