import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";
import { Auth } from "../../";

class Nav extends Component {
  handleRedirect = link => {
    const { history } = this.props;
    const originalLink = window.location.pathname;
    return originalLink !== link ? history.push(link) : null;
  };

  render() {
    const { history } = this.props;
    return (
      <Menu
        theme="dark"
        mode="inline"
        style={{ marginTop: "20px" }}
        defaultSelectedKeys={["4"]}
      >
        <Menu.Item key="1" onClick={() => this.handleRedirect("/admin/panel")}>
          <Icon type="dashboard" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => this.handleRedirect("/admin/panel/orders")}
        >
          <Icon type="appstore" />
          <span className="nav-text">Orders</span>
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => this.handleRedirect("/admin/panel/vistors")}
        >
          <Icon type="team" />
          <span className="nav-text">Vistors</span>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            Auth.deauthenticateUser();
            history.push("/admin/");
          }}
          key="4"
        >
          <Icon type="logout" />
          <span className="nav-text">Logout</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Nav);
