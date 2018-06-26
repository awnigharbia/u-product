import React, { Component } from 'react'

import {
    logo,   
    beg,
    like,
    strong,
    write,
    clapping,
    select,
    positive,
    SelectLang,
    BtnContainer,
    BackWrapper,
    } from '..'

export default class CreateProject extends Component {
    state = {
        selectValue:'',
        states: [beg, like, strong, clapping, positive],
        show:false,
        currentState:select,
        write:write,
        top:'',
        moves:['', '15','65', '120', '170', '280'],
        email:'',
        city:'',
        un:'',
        password:'',
        lang:'',
        description:'',
    }

    handleBlur = () => {
        this.setState({show: !this.state.show, currentState:select})
    }

    handleFoucs = e => {
        const id = e.target.id;
        const { moves} = this.state
        
        this.setState({show: !this.state.show, currentState: select, top: `${moves[id]}px`})
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
    
    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        const {selectValue, top, show, email, city, un, password,  description, currentState} = this.state

        return (
            <BackWrapper>
                        <div className="top-logo">
                            <img src={logo} alt={logo} />
                        </div>
                        <div className="project-form">
                            { show && 
                                <div className='state left-move' style={{top:top}}>
                                    <img src={currentState} alt={select} />
                                </div>
                            }
                            <Input 
                                type='email'
                                id='1'
                                placeholder='Email'
                                onFocus={this.handleFoucs}
                                onChange={(e) => this.handleChange('email', e)}
                                onBlur={this.handleBlur}
                                value={email}
                            />
                            <Input 
                                type='text'
                                id='2'
                                placeholder='City'
                                onFocus={this.handleFoucs}
                                onChange={(e) => this.handleChange('city', e)}
                                onBlur={this.handleBlur}
                                value={city}
                              />
                            <Input 
                                type='text'
                                id='3'
                                placeholder='Universty name'
                                onFocus={this.handleFoucs}
                                onChange={(e) => this.handleChange('un', e)}
                                onBlur={this.handleBlur}
                                value={un}
                             />
                            <Input 
                                type='password'
                                id='4'
                                placeholder='Password'
                                onFocus={this.handleFoucs}
                                onChange={(e) => this.handleChange('password', e)}
                                onBlur={this.handleBlur}
                                value={password}
                             />
                            <SelectLang select={selectValue} />
                            <textarea   name="beirf" 
                                        className='input-form' id="5" cols="30" rows="5" 
                                        placeholder='Describe your project...' 
                                        onFocus={this.handleFoucs}
                                        onChange={(e) => this.handleChange('description', e)}
                                        onBlur={this.handleBlur}
                                        value={description} required></textarea>

                            <BtnContainer state='init' /> 
                        </div>
                </BackWrapper>
        )
    }
}


const Input = props => <input className='input-form' {...props} required />

