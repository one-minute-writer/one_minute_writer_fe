import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App/App';
import { ApolloClient, InMemoryCache, ApolloProvider, useLazyQuery } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://one-minute-writer-be.herokuapp.com/graphql`,
})

console.log(client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

