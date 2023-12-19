import React, { useState } from "react";
import { Outlet } from "react-router";
import { Layout, Menu, Button, theme } from "antd";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { AiFillTags } from "react-icons/ai";
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            className="bg-[#94D5CB]"
            // theme="dark"
            // mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <FaInfo />,
                label: <Link to={"dashboardinfo"}>Dashboard Info</Link>,
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
              // margin: "24px 16px",
              padding: 24,
              minHeight: 630,
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
