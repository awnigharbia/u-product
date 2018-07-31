import React, { Component, Fragment } from "react";
import { Layout, Card, Row, Col, Breadcrumb, Icon } from "antd";
const { Header, Content } = Layout;

export default class Dashboard extends Component {

  render() {
    const {
      data: {
        newProject = {},
        projects = {},
        messages = {},
        pending = {},
        completedProjects = {},
        vistors = {},
        users = {}
      },
      loading
    } = this.props;

    return (
      <Fragment>
        <Header
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background: "#fff",
            padding: 0
          }}
        >
          <Breadcrumb style={{ marginLeft: "20px" }}>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>Panel</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                title="New Messages"
                hoverable={true}
                loading={loading}
                bordered={false}
              >
                <h2>{messages.length} New Messages</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="New Projects"
                hoverable={true}
                loading={loading}
                bordered={false}
              >
                <h2>{newProject.length} Project</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Total Projects"
                hoverable={true}
                loading={loading}
                bordered={false}
              >
                <h2>{projects.length} Project</h2>
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={8}>
              <Card
                title="Total Vistors"
                hoverable={true}
                loading={loading}
                bordered={false}
              >
                <h2>{vistors.length} Vistor</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Pending Projects" loading={loading} bordered={false}>
                <h2>{pending.length} Project</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Completed Projects"
                hoverable={true}
                loading={loading}
                bordered={false}
              >
                <h2>{completedProjects.length} Project</h2>
              </Card>
            </Col>
          </Row>
        </Content>
      </Fragment>
    );
  }
}
