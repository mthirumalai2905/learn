// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import your main App component (replace 'App' with your actual component name)
import App from './App';

// Render the App component into the root element in your HTML file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
