import React, {Component} from 'react'
import {
    Styles,
    BackWrapper,
    check,
    Link,
} from '..'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class FinishForm extends Component {
    state = {
        url:'www.google.com',
        value:'Copy !',
    }

    onCopy = () => {
        this.setState({
            value:"Copied !",
        }, () => {
            this.timer = setTimeout(() => {
                this.setState({value:"Copy !"})
            }, 2000)   
        })
    }

    render() {  
        const {value, copied, url} = this.state

        return (
            <BackWrapper>
                <div className="finished-form-wrapper">
                    <img src={check} alt={check} />
                    <h3>Project Sent !</h3>
                    <span>Pay Attention Please:</span>
                    <p>Copy this URL to keep tracking of your project status and keep in touch with us (Note:Password is Required)</p>
                    <div className="copy-url">
                        <input type="text" disabled='true' value={url} />
                        <CopyToClipboard text={url} onCopy={this.onCopy}>
                            <button>{value}</button>
                        </CopyToClipboard>
                        <Link to='project-status-locked'>View Status</Link>
                    </div>
                </div>
            </BackWrapper>
        )
    }
}