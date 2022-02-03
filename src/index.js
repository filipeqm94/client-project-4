import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

import { AuthProvider } from './Context';

import './index.scss';

import App from './App';

render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
