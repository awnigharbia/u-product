import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Auth from "../../../auth";
import { withRouter } from "react-router-dom";

class LoginPanel extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  _saveUserData = (token, admin) => {
    const { history } = this.props;

    Auth.authenticateUser(token);
    Auth.setRole(admin);
    history.push("/admin/panel/");
  };

  _confirm = async () => {
    const { email, password } = this.state;

    const result = await this.props
      .loginMutation({
        variables: {
          email,
          password
        }
      })
      .then(
        ({
          data: {
            login: {
              token,
              user: { admin }
            }
          }
        }) =>
          admin
            ? this._saveUserData(token, admin)
            : this.setState({ error: "No Permission" })
      )
      .catch(e => this.setState({error:"Login faild"}));
  };

  handleChange = (input, { target: { value } }) => {
    this.setState({
      [input]: value
    });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-container">
          <h4>Admin Panel</h4>
          {error && <span>error</span>}
          <input
            type="text"
            value={email}
            onChange={e => this.handleChange("email", e)}
            placeholder="Email"
            autoFocus
          />
          <input
            type="password"
            value={password}
            onChange={e => this.handleChange("password", e)}
            placeholder="Password"
          />
          <button onClick={this._confirm}>Login</button>
        </div>
      </div>
    );
  }
}

const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        admin
      }
      token
    }
  }
`;

export default withRouter(
  graphql(LOGIN_MUTATION, { name: "loginMutation" })(LoginPanel)
);
