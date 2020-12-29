import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Avenir:300,400,700', 'sans-serif',
      'Work Sans:300,500,600', 'sans-serif'
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
