import React, { Component } from 'react'
import {
    Styles,
    Link,
    NavItems,
    NavbarContainer
} from './imports'


export default class NavBar extends Component {
    render() {
        return (
            <NavbarContainer items={NavItems} />
        )
    }
}

