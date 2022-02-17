const express = require('express');
const app = express();
const mongoose = require('mongoose');
const login = require('./Routes/login');
const register = require('./Routes/register');
const verifyEmail = require("./Routes/verifyEmail");

mongoose.connect("mongodb://localhost/dummy");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const db = mongoose.connection;

db.once('open', () => console.log('Connected to db!'));


app.use('/', login);
app.use('/', register);
app.use('/', verifyEmail);

app.listen(8000);