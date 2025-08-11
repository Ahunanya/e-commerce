// src/index.js (or src/index.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App.jsx'; // This path should point to your main App.jsx
import './styles/output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);