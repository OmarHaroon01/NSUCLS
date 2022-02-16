const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/dummyDatabase",
);

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const db = mongoose.connection;

db.once('open', ()=>{
  console.log('DataBase connected')
})

const LoginRoute = require('./routes/register');

app.use('/people/', LoginRoute);

app.listen(8000);
