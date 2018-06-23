import React from 'react'
import {Styles} from '..'


const BackWrapper = ({children}) => (
    <div className='app-wrapper'>
        <div className="top-wrapper full-height">
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    </div>
)


export default BackWrapper;

