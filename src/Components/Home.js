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
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Home = (props) => {
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
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BellOutlined />}>
              <Link to="/buyumlar">Buyurtmalar</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckSquareOutlined />}>
              <Link to="/davolangan">Davolanganlar</Link>
            </Menu.Item>
            {/* <Menu.Item key="4" icon={<MessageOutlined />}>
              Xabarlar
            </Menu.Item> */}
            <Menu.Item key="4" icon={<LayoutOutlined />}>
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
                <Link to="/davolangan">
                  <div className="icon_sup">
                    <div className="icon_bell">
                      <BellOutlined />
                    </div>
                    <div className="doctor_sup">0</div>
                  </div>
                </Link>
              </div>
              <div className="avatar_div">
                <Link to="/user">
                  <Avatar
                    style={{ backgroundColor: "white", cursor: "pointer" }}
                    size={40}
                    src={AvatarImg}
                  />
                </Link>
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
            {props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Сайт поддерживается компанией Marcossoft.
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
