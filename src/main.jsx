// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';
// Then import your custom CSS to override/add styles
import './index.css';

// Optionally, if you need Bootstrap's JS for dropdowns/modals etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);