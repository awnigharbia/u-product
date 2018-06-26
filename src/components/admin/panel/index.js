import React, {Component} from 'react'
import { Layout, Avatar } from 'antd';
import {Nav, Dashboard, Orders, Vistors} from '../../'
import {Switch, Route} from 'react-router-dom'
const { Sider } = Layout;


export default class AdminPanel extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                <div className="logo">
                    <Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                    <h3>Uni-product</h3>
                </div>
                <Nav />
                </Sider>
                <Layout>
                    <Switch>
                        <Route exact path='/admin/panel/'  component={Dashboard} />
                        <Route exact path='/admin/panel/orders/' component={Orders} />
                        <Route exact path='/admin/panel/vistors/' component={Vistors} />
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}