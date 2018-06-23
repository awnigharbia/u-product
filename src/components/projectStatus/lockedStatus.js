import React, {Component} from 'react'
import {
        Styles, 
        BackWrapper,
        lock,
    } from '..'


export default class LockedStatus extends Component {
    render() {
        return (
            <BackWrapper>
                <div className="lock-wrapper">
                    <img src={lock} alt={lock} />
                    <h3>Enter your password:</h3>
                    <div className="input">
                        <input type="password" placeholder='Please enter password..' autoFocus/>
                        <button>UN-LOCK</button>
                    </div>
                </div>
            </BackWrapper>
        )
    }
}