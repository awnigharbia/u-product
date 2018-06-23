import React, {Component} from 'react'
import {Styles, LeftSideImg} from '..'


export default class LeftSide extends Component {
    render() {
        return (
            <div className='leftSide'>
                <div className="left-img-wrapper pulse">
                    <img src={LeftSideImg} alt='' />
                    <h4>let's be <span>Creative</span> !</h4>
                </div>
            </div>
        )
    }
}