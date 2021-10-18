import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import App from './App';
//import ClassComponentes from './ClassComponentes';
//import WorkStates from './WorkStates';
//import CiclodeVida from './CiclodeVida';
//import RenderCondicional from './RenderCondicional';
import TrabListas from './TrabListas';

ReactDOM.render(
  <React.StrictMode>
    <TrabListas/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
