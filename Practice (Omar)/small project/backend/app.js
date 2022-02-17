const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerRouter = require("./Routes/register");
const loginRouter = require("./Routes/login");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

mongoose.connect("mongodb://localhost/smallproject");

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = mongoose.connection;

db.once("open", () => console.log("DB connected"));

app.use("/", registerRouter);
app.use("/", loginRouter);

app.listen(8000);
