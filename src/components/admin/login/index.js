import React, {Component} from 'react'
import {Styles, Link} from '../../'


export default class LoginPanel extends Component {
    render() {
        return (
            <div className='admin-login-wrapper'>
                <div className="admin-login-container">
                    <h4>Admin Panel</h4>
                    <input type="text" placeholder='Username' autoFocus />
                    <input type="password" placeholder='Password'  />
                    <Link to='/admin/panel'>LOGIN</Link>
                </div>
            </div>
        )
    }
}