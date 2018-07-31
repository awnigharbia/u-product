import React, { Component } from 'react'
import { BackWrapper } from '../'
import { withRouter } from 'react-router-dom'

class AlreadyLogged extends Component {
    _redirect = () => {
        const { history, link } = this.props
        history.push(`/project/${link}`);
    }
    render() {
        return (
            <BackWrapper>
                <div className="already-logged">
                    <h1>You're already logged in</h1>
                    <button onClick={this._redirect}>Go Back to project</button>
                </div>
            </BackWrapper>
        )
    }
}

export default withRouter(AlreadyLogged)