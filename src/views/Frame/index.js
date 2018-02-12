import NavMenuContainer from '../NavMenu';
import SysInfo from "../SysInfo";
import React from 'react'
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import { Layout, Menu } from 'antd';
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
                        <NavMenuContainer/>
                    </Sider>
                    <Layout style={{ padding: '24px 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/" component={SysInfo}></Route>
                                </Switch>
                            </BrowserRouter>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>  
        );
    }
}