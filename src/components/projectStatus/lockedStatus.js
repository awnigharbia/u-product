import React, {Component} from 'react'
import { 
        BackWrapper,
        lock,
        Auth
    } from '..'

import {withRouter} from 'react-router-dom'
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LockedStatus extends Component {
    state = {
        pass:'',
        email:'',
    }
    
    _saveUserData = (token, id) => {
        const { history } = this.props;
        Auth.authenticateUser(token);
        history.push(`/project/${id}` );
    };

    handleChange = (input, {target: {value}}) => {
        this.setState({[input]:value});
    }

    _confirm = async () => {
        const { email, pass } = this.state;
    
        const result = await this.props
          .loginMutation({
            variables: {
              email,
              password:pass,
            }
          })
          .then(
            ({
              data: {
                login: {
                  token,
                  user: {project:{id}}
                }
              }
            }) =>
              this._saveUserData(token, id)
          )
          .catch(e => console.log(e));
    };
    render() {
        const {pass, email} = this.state

        return (
            <BackWrapper>
                <div className="lock-wrapper">
                    <img src={lock} alt={lock} />
                    <h3>Access your project status:</h3>
                    <div className="input">
                        <input type="email" value={email} onChange={(e) => this.handleChange('email', e)} placeholder='Please enter email..' autoFocus/>
                        <input type="password" value={pass} onChange={(e) => this.handleChange('pass', e)} placeholder='Please enter password..' />
                        <button onClick={this._confirm}>UN-LOCK</button>
                    </div>
                </div>
            </BackWrapper>
        )
    }
}

const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        project {
            id
        }
      }
      token
    }
  }
`;

export default  withRouter(graphql(LOGIN_MUTATION, { name: "loginMutation" })(LockedStatus))

