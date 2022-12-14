import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// PWA
import * as serviceWorker from './serviceWorker' // I'm confused on this part because there isn't a serviceWorker.js file, but the tutorial said it has to be this -Hasan


ReactDOM.render(
  <React.StrictMode>
    <App />, document.getElementById('root')
  </React.StrictMode>,
  document.getElementById('root')
);