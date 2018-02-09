import NavMenu from '../NavMenu';
import React from 'react'
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Frame extends React.Component{
    render(){
        return (
            <Layout style={{height: "100%"}}>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <NavMenu/>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/"></Route>
                                </Switch>
                            </BrowserRouter>
                        Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>  
        );
    }
}