import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import RegisForm from './components/AuthPage/Register';
import LoginForm from './components/AuthPage/Login';
import OpponentPage from './components/opponent/Opponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<OpponentPage/>}/>
      </Routes>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
