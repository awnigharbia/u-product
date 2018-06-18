import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Styles,
    logo,
    downArrow,
    Js,
    Php,
    beg,
    like,
    strong,
    write,
    clapping,
    select,
    positive,
    } from './imports'

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
        const {top, moves} = this.state
        
        this.setState({show: !this.state.show, currentState: select, top: `${moves[id]}px`}, () => {
            console.log(this.state.top);
        })
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
        const {selectValue, top, show, email, city, un, password, lang, description, currentState} = this.state

        return (
            <div className='app-wrapper'>
                <div className="top-wrapper full-height">
                    <div className="content-wrapper">
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

                            <button className='btn-form'>Send</button> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Input = props => <input className='input-form' {...props} required />


class SelectLang extends Component {
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