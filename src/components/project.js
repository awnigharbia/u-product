import React, {Component } from 'react'
import {Styles, App, CreateProject} from './imports'
import {routes} from './constant'
import {Switch, Route} from 'react-router-dom'



export default class Project extends Component {
    render() {
        return (
            <Switch>
                {
                    routes.map(({path, exact, component, key}) => {
                        return <Route key={key} path={path} exact={exact} component={component}/> 
                    })
                }
                
            </Switch>
        )
    }
}