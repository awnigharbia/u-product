import React, {Component} from 'react'
import {Styles, LeftSideImg} from '../imports'


export default class LeftSide extends Component {
    render() {
        return (
            <div className='leftSide'>
                <div className="top-line"></div>
                <div className="left-img-wrapper pulse">
                    <img src={LeftSideImg} alt='' />
                </div>
                <div className="bottom-line"></div>
            </div>
        )
    }
}