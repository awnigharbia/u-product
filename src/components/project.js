import React, {Component } from 'react'
import {Styles, App, CreateProject} from './imports'
import {Switch, Route} from 'react-router-dom'



export default class Project extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/create-project' component={CreateProject} />
            </Switch>
        )
    }
}