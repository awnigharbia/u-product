import React, {Component} from 'react'
import {
    Styles,
    LogoInfo,
    Fb,
    tw,
    Ld,
} from '../imports'



export default class AboutUS extends Component {
    render() {
        return (
            <div className='about-us'>
                <div className="logo-info">
                    <img src={LogoInfo} alt={LogoInfo} />
                </div>
                <div className="social-media">
                        <img src={Fb} alt={Fb} />
                        <img src={tw} alt={tw} />
                        <img src={Ld} alt={Ld} />
                </div>
                <div className="info">
                    <div className="line"></div>
                    <p>All Rights Reserved @2018</p>
                </div>
            </div>
        )
    }
}