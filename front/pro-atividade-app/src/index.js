import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Menu from './components/Menu'
import 'bootswatch/dist/cosmo/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <div className="container">
      <App />
    </div>
  </BrowserRouter>
);

