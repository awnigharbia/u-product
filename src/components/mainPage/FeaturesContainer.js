import React, {Component} from 'react'
import {Styles} from '..'
import {Features} from '../constant'


export default class FeaturesContainer extends Component {
    render() {
        return (
            <div className='features-wrapper'>
                {Features.map((item, key) => <FeatureItem key={key} {...item} />)}
            </div>
        )
    }
}


const FeatureItem = ({name, icon}) => {
    return (
        <div className='feature-item'>
            <img src={icon} alt={icon} />
            <h4>{name}</h4>
        </div>
    )
}