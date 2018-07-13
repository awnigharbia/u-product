import React, { Component } from 'react'
import { routes } from './constant'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Auth } from './'


export default class Project extends Component {

  render() {
    return (
      <Switch>
        {renderRoutes(routes, Auth.isUserAuthenticated())}
      </Switch>
    )
  }
}

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
            });
          }}
          key={item.path}
        />
      );

      return routes;
    }
  });
};