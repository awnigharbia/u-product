import React, {Component} from 'react'
import {Styles,
        Js,
        Php,
        downArrow,
       } from '../imports'
import ReactDOM from 'react-dom'


export default class SelectLang extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            show:false,
            select:this.props.select
        }

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
    }

    handleValue = e => {
        const node = this.myRef.current
        const node2 = this.myRef1.current
        const value = ReactDOM.findDOMNode(node).innerHTML
        const value2 = ReactDOM.findDOMNode(node2).innerHTML

        if (value !== '') {
            this.setState({
                select:value,
            })
        }

        if (value2 !== '') {
            this.setState({
                select:value2,
            })
        }
    }

    handleClick = () => {
        this.setState({show: !this.state.show })
    }

    render() {
        const {show} = this.state

        return (
            <div className="select-lang" onClick={this.handleClick}>
                <div className="top-select">
                    <p>Select Language</p>
                    <img src={downArrow} alt='select-tag' id='down-arrow'  className={show ? 'down-arr' : 'back-arr'} />
                </div>
                { show && 
                    <div className="drop-lang">
                        <div className="drop-lang-item" onClick={this.handleValue}>
                            <img src={Js} alt={Js}/>
                            <p ref={this.myRef1}>Javascript</p>
                        </div>
                        <div className="drop-lang-item" onClick={this.handleValue}>
                            <img src={Php} alt={Php}/> 
                            <p ref={this.myRef}>Php</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}