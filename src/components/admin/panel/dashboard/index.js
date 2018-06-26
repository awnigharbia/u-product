import React, {Component, Fragment} from 'react'
import { Layout, Card, Row, Col, Breadcrumb, Icon} from 'antd'

const { Header, Content} = Layout 

export default class Dashboard extends Component {
    state = {
        loading:true,
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({loading:!this.state.loading}), 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { loading } = this.state

        return (
            <Fragment>
                <Header style={{ display:'flex', flexDirection:'row',alignItems:'center', background: '#fff', padding: 0 }}>
                <Breadcrumb style={{marginLeft:'20px'}}>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                    <Icon type="user" />
                        <span>Panel</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Dashboard
                    </Breadcrumb.Item>
                </Breadcrumb>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="New Orders" hoverable={true} loading={loading} bordered={false}>
                                    <h2>600 Order</h2>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="New Vistors" hoverable={true} loading={loading} bordered={false}>
                                    <h2>600 Vistors</h2>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Total Orders" hoverable={true} loading={loading} bordered={false}>
                                    <h2>600 Order</h2>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{marginTop:'20px'}}>
                            <Col span={8}>
                                <Card title="Total Vistors" hoverable={true} loading={loading} bordered={false}>
                                    <h2>600 Vistor</h2>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Pending Projects" loading={loading} bordered={false}>
                                    <h2>600 Project</h2>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Completed Projects" hoverable={true} loading={loading} bordered={false}>
                                    <h2>600 Project</h2>
                                </Card>
                            </Col>
                        </Row>
                </Content>
            </Fragment>
        )
    }
}