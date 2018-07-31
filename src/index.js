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
import { ApolloLink, split } from 'apollo-client-preset'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = new HttpLink({ uri: 'https://fast-coast-99728.herokuapp.com/'})

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

const wsLink = new WebSocketLink({
    uri: `ws://fast-coast-99728.herokuapp.com/`,
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: Auth.getToken(),
      }
    }
  })
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLinkWithAuthToken,
  )
  

const client = new ApolloClient({
    link,
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
