import './index.css';
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Breadcrumb } from 'antd';
import NavMenu from './views/NavMenu';
import Home from './views/Home';

const { Header, Content, Footer } = Layout;

document.getElementById('root').style.height = "100%";
ReactDOM.render(
    <Layout style={{height: "100%"}}>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo" />
        <NavMenu />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Home />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  , document.getElementById('root'));
registerServiceWorker();
