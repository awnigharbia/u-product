import React, { Component } from 'react'
import {
    Styles,
    Link,
    NavbarContainer
} from '..'
import { NavItems } from '../constant'

export default class NavBar extends Component {
    render() {
        return (
            <NavbarContainer items={NavItems} />
        )
    }
}

