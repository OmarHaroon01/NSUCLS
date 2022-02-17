import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/login';
import reportWebVitals from './reportWebVitals';
import Register from './Components/register';
import VerifyEmail from './Components/verifyEmail';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/verifyEmail" element={<VerifyEmail/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
