import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App/App';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: `https://one-minute-writer-be.herokuapp.com/graphql` });
const operationNameLink = new ApolloLink ((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      'x-gql-operation-name': operation.operationName,
      ...headers,
    },
  }));
  return forward(operation)
});

const client = new ApolloClient({
  link: concat(operationNameLink, httpLink),
  cache: new InMemoryCache({
    resultCaching: false
  }),
  // uri: `https://one-minute-writer-be.herokuapp.com/graphql`,
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);