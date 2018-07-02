import React, {Component} from 'react'
import {
        Js,
        Php,
        downArrow,
       } from '..'

export default class SelectLang extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            show:false,
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
                    <p>{this.props.select || "Select a language"}</p>
                    <img src={downArrow} alt='select-tag' id='down-arrow'  className={show ? 'down-arr' : 'back-arr'} />
                </div>
                { show && 
                    <div className="drop-lang">
                        <div className="drop-lang-item" onClick={() => this.props.handleValue("Javascript")}>
                            <img src={Js} alt={Js}/>
                            <p>Javascript</p>
                        </div>
                        <div className="drop-lang-item" onClick={() => this.props.handleValue("PHP")}>
                            <img src={Php} alt={Php}/> 
                            <p>Php</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}