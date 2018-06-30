import React, {Component} from 'react'
import { Layout, Avatar } from 'antd';
import {Nav, DashboardContainer, OrdersContainer, VistorsContainer, Auth} from '../../'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
const { Sider } = Layout;


class AdminPanel extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    >
                <div className="logo">
                    <Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                    <h3>Uni-product</h3>
                </div>
                <Nav />
                </Sider>
                <Layout>
                    <Switch>
                        <Route exact path='/admin/panel/'  render={
                           () => Auth.isAdmin() ? <DashboardContainer /> : <Redirect to="/admin/" />
                        } />
                        <Route exact path='/admin/panel/orders/' render={
                            () => Auth.isAdmin() ? <OrdersContainer /> : <Redirect to="/admin/" />
                        } />
                        <Route exact path='/admin/panel/vistors/' render={
                            () => Auth.isAdmin() ? <VistorsContainer /> : <Redirect to="/admin/" />
                        } />
                    </Switch>
                </Layout>

            </Layout>
        )
    }
}

export default withRouter(AdminPanel)