import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Redirect from "./Redirect";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Redirect />
    </BrowserRouter>
  </React.StrictMode>
);
