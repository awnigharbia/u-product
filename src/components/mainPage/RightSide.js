import React , {Component} from 'react'
import { 
        Link, 
        RightArrow,
    } from '..'

export default class RightSide extends Component {

    render() {
        const { show, currentState, top} = this.props

        return (
            <div className='right-side'>
                <h3>Hi ! READY TO FINISH YOUR PROJECT ?</h3>
                <span>We are here to serve you, What are you waiting for ? Ask for new One !</span>
                <div className="p-form">
                    <div className="input-form">
                        <div className="input-form-container">
                           <Link to="/create-project">Create Project</Link>
                           <h3>OR</h3>
                           <Link to="/project/lock">LOGIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}