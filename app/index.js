/* eslint no-plusplus: 0 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.global.css';
import App from './containers/App.js';

render(
  <App/>,
  document.getElementById('root')
);