import React , {Component} from 'react'
import {Style, 
        Link, 
        RightArrow,
        beg,
        like,
        strong,
        write,
        clapping,
        select,
        positive,
    } from './imports'

export default class RightSide extends Component {
    state = {
        states: [beg, like, strong, clapping, positive],
        show:false,
        currentState:select,
        write:write,
        top:'5',
        nameInput:'',
        lang:'',
    }
    handleBlur = () => {
        this.setState({show: !this.state.show, currentState:select, top:'5'})
    }

    handleFoucs = e => {
        const id = e.target.id;
        const {top} = this.state
        
        this.setState({show: !this.state.show, currentState: select, top: id === '1' ? top * id : top * id + 60})
    }

    afterType = input => {
        this.timer = setTimeout(e => {

            const {states} = this.state;
            const currentIndex = Math.floor(Math.random() * 4) + 1  
            
            input !== '' ? this.setState({currentState: states[currentIndex]}) : this.setState({currentState:select})
        }, 1000)
    }

    handleChange = (input, e ) => {
        const {write} = this.state;
        clearTimeout(this.timer)

        this.setState({
            show:true, 
            currentState: write,
            [input]:e.target.value,
            }, () => this.afterType(this.state[input])) 
    }

    componentDidMount() {
        this.timer = null;
    }

    render() {
        const { show, currentState, nameInput, top, lang} = this.state

        return (
            <div className='right-side'>
                <h3>Hi ! READY TO FINISH YOUR PROJECT ?</h3>
                <span>We are here to serve you, What are you waiting for ? Ask for new One !</span>
                <div className="p-form">
                    <div className="input-form">
                        <div className="input-form-container">
                            { show && 
                                <div className='state' style={{top:top}}>
                                    <img src={currentState} alt={select} />
                                </div>
                            }
                            <input type="text" placeholder='Whats your project name ?' id='1'
                                   value={nameInput}
                                   onFocus={this.handleFoucs} 
                                   onBlur={this.handleBlur} 
                                   onChange={e => this.handleChange('nameInput', e)}
                                   required />

                            <input type="text" placeholder='Whats language ?' id='2'
                                   value={lang}
                                   onFocus={this.handleFoucs} 
                                   onBlur={this.handleBlur} 
                                   onChange={e => this.handleChange('lang', e)} 
                                   required />
                        </div>
                    </div>
                    <Link to="/create-project" className='s-p-b'>
                        <img src={RightArrow} alt={RightArrow} />
                    </Link>
                </div>
            </div>
        )
    }
}