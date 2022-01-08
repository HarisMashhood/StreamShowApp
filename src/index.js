import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
  <Provider store ={store}>   
    <App />
  </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
//Above is the app is wrapped up and getting stored in redux i:e the login functionality we created app is wrapped inside of it.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

