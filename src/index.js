import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain=""
  clientId=""
  redirectUri={}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
