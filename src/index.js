import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App/App';
import { ApolloClient, InMemoryCache, ApolloProvider, useLazyQuery } from '@apollo/client';


ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

