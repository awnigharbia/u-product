import React, {Component} from 'react'
import {
    BackWrapper,
    check,
    Link,
} from '..'
import {withRouter} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class FinishForm extends Component {
    state = {
        url:'localhost:3001/project/' + this.props.match.params.id,
        to:'/project/' + this.props.match.params.id,
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

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {  
        const {value,  url, to} = this.state
        
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
                        <Link to={to} >View Status</Link>
                    </div>
                </div>
            </BackWrapper>
        )
    }
}

export default withRouter(FinishForm)