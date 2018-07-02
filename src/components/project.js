import React, {Component } from 'react'
import {routes} from './constant'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Auth} from './'

const renderRoutes = (data, isLoggedIn) => {
    return Object.values(data).map(item => {
     if (item.is_private && item.is_private === true && !isLoggedIn) {
        return (
          <Route
            path={item.path}
            key={item.path}
            render={() => <Redirect to="/create-project" />}
          />
        );
        // a private route, can't access it
      } else {
        let routes = [];
        if (item.nested) {
          routes = [...renderRoutes(item.nested, isLoggedIn)];
        }
        routes.push(
          <Route
            key={item.path}
            path={item.path}
            exact
            render={props => {
              return React.createElement(item.component, {
                ...props,
                className: item.class,
                icon: item.icon
              });
            }}
            key={item.path}
          />
        );
  
        return routes;
      }
    });
  };

export default class Project extends Component {
    state = {
        isLoggedIn:Auth.isUserAuthenticated()
    }

    render() {
       
        return (
            <Switch>
                {renderRoutes(routes, this.state.isLoggedIn)}
            </Switch>
        )
    }
}