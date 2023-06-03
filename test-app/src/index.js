import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Component } from 'react';
import './index.css'
import welcomeSection from './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

