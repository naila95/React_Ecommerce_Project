import React, { useContext, useState } from "react";
import { Outlet } from "react-router";
import { Layout, Menu, Button, theme } from "antd";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { AiFillTags } from "react-icons/ai";
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { UserContext } from "../../contexts/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const { Header, Sider, Content } = Layout;
  const { user, setUser } = useContext(UserContext);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  if (user.role === "superadmin") {
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              className="bg-[#94D5CB] h-[101vh] sticky top-0"
              theme="light"
              items={[
                {
                  key: "1",
                  icon: <FaInfo />,
                  label: <Link to={"dashboard-info"}>Dashboard Info</Link>,
                },
                {
                  key: "2",
                  icon: <AiFillSchedule />,
                  label: <Link to={"orders"}>Orders</Link>,
                },
                {
                  key: "3",
                  icon: <AiFillTags />,
                  label: <Link to={"products"}>Products</Link>,
                },
                {
                  key: "4",
                  icon: <FaRegUser />,
                  label: <Link to={"staff"}>Staff</Link>,
                },
                {
                  key: "5",
                  icon: <TbBrandMeta />,
                  label: <Link to={"brands"}>Brands</Link>,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header
              className="bg-[#94D5CB] flex justify-between"
              style={{ padding: 0 }}
            >
              <Button
                type="text"
                icon={collapsed ? <FaRegFolderOpen /> : <FaRegFolderClosed />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 65,
                  height: 65,
                }}
              />
              <Button
                type="text"
                style={{
                  fontSize: "23px",
                  width: 65,
                  height: 65,
                }}
                icon={<IoLogInOutline />}
                onClick={() => {
                  logOut();
                }}
              />
            </Header>

            <Content
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              className="bg-[#94D5CB] h-[101vh] sticky top-0"
              theme="light"
              items={[
                {
                  key: "2",
                  icon: <AiFillSchedule />,
                  label: <Link to={"orders"}>Orders</Link>,
                },
                {
                  key: "3",
                  icon: <AiFillTags />,
                  label: <Link to={"products"}>Products</Link>,
                },
                {
                  key: "5",
                  icon: <TbBrandMeta />,
                  label: <Link to={"brands"}>Brands</Link>,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header className="bg-[#94D5CB]" style={{ padding: 0 }}>
              <Button
                type="text"
                icon={collapsed ? <FaRegFolderOpen /> : <FaRegFolderClosed />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 65,
                  height: 65,
                }}
              />
            </Header>

            <Content
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
