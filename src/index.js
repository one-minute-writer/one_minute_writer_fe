import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App/App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache({
    resultCaching: false
  }),
  uri: `https://one-minute-writer-be.herokuapp.com/graphql`,
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

