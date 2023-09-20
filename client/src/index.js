import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component
import './index.css';  // Optional global styles

// Render the App component into the div with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
