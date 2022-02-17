import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Component/home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from './Component/register';
import Login from './Component/login';
import Logged from './Component/logged';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/Login"}element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Logged" element={<Logged />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
