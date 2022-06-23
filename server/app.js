const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT;

//Connect my Application to my database. It returns promise.

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello World from the server`);
});

app.get("/about", middleware, (req, res) => {
  console.log("Hello my about");
  res.send(`Hello About World from the server`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello Contact World from the server`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello Login World from the server`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello Registration World from the server`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port no. ${PORT}`);
});
