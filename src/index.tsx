import React, {Dispatch} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Intro} from "./Intro/Intro";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename={'/hadar-final-project-website'}>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
