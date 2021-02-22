import {
  DesktopOutlined,
  FireOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assests/images/logo.png";
import TokenUtil from "../../../utils/TokenUtils";

interface IBaseLayoutProps {}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = (props) => {
  const { children } = props;
  const history = useHistory();

  const logout = () => {
    TokenUtil.logout();
    history.push("/");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className='site-layout-background'>
        <LogoWrapper
          style={{ padding: "20px", background: "#141414", fontWeight: 600 }}
        >
          <img src={logo}></img>LattiCS
        </LogoWrapper>

        <Menu
          mode='inline'
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key='1' icon={<FireOutlined />}>
            <Link to='/'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<FireOutlined />}>
            <Link to='/simulation'>Simulations</Link>
          </Menu.Item>

          <Menu.Item key='3' icon={<DesktopOutlined />}>
            Configurations
          </Menu.Item>
          <Menu.Item key='4' icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <div style={{ marginLeft: "auto", width: "60px" }}>
            <Avatar></Avatar>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

const LogoWrapper = styled.div`
  img {
    width: 40px;
    margin-right: 20px;
  }
  font-size: 18px;
`;

export default BaseLayout;
