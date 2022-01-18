import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './index.css';

import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
