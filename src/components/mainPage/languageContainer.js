import React, {Component} from 'react'
import {Styles} from '../imports'
import {Languages} from '../constant'

export default class LanguageContainer extends Component {
    render() {
        return (
            <div className='language'>
                <h2>What languages do we <span>support</span>?</h2>
                <div className="language-cards">
                    {
                        Languages.map((item, key) => {
                            return <Language key={key} {...item} />
                        })
                    }
                </div>
            </div>
        )
    }
}


const Language = ({name, icon, skills}) => {
    return (
        <div className='language-card'>
            <img src={icon} alt={icon} />
        </div>
    )
}