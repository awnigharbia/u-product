import React, { Component } from 'react'
import {
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

