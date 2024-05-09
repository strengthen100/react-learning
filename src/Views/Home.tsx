import { LaptopOutlined, NotificationOutlined, UserOutlined,DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import {Outlet,useNavigate} from "react-router-dom"
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));
//const navigateTo = useNavigate()
const menuClick = (e:{key:string}) =>{ //编程式导航的跳转
  console.log("点击了菜单",e.key);
 // navigateTo(e.key)
}

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      
 
      children: new Array(4).fill(null).map((_, j) => {
       
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
          Click:`page${subKey}`, //跳转获取到的路径（写错了）
        }; 
      }),
    };
  },
);

//组件开始
const View: React.FC = () => (
 
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
    </Header>   {/*头部*/}
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu onClick={menuClick}
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>{/*左侧菜单*/}
      <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0',color:'blue' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>{/*导航元素*/}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          真实不容易的一天
          <Outlet /> 
        </Content>{/*页面窗口内容*/}
        <Footer style={{textAlign:'center'}}>Ant Design @2024</Footer> {/*脚部*/}
      </Layout>
    </Layout>
  </Layout>
);

export default View;