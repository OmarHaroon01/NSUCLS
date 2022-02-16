const express = require('express');
const app = express();
const mongoose = require('mongoose');
const register = require('./Routes/register');

mongoose.connect("mongodb://localhost/dummy");

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const db = mongoose.connection;

db.once('open', () => console.log('Connected to db!'));


app.use('/', register);

app.listen(8000);