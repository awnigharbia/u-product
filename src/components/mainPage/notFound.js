import React, {Component} from 'react'
import {
    BackWrapper,
    notfound
} from '..'


export default class NotFound extends Component {
    render() {
        return (
            <BackWrapper>
                <div className="notfound-wrapper">
                    <img src={notfound} alt={notfound} />
                    <div className="bottom">
                        404 Not Found
                    </div>
                </div>
            </BackWrapper>
        )
    }
}