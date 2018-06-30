import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import { Project } from './components/'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Auth from './auth'

// apollo imports 
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-client-preset'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'http://localhost:4000'})

const middlewareAuthLink = new ApolloLink((operation, forward) => {
    const token =  Auth.getToken()
    const authorizationHeader = token ? `Bearer ${token}` : null
    operation.setContext({
      headers: {
        authorization: authorizationHeader
      }
    })
    return forward(operation)
  })
  
const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

const client = new ApolloClient({
    link: httpLinkWithAuthToken,
    cache: new InMemoryCache(),
})

render(
    <Router>
        <ApolloProvider client={client}>
            <Project />
        </ApolloProvider>
    </Router>,
document.getElementById('root'));
registerServiceWorker();
