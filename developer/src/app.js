// take express
const express = require("express");
const app = express();

//session
const session = require("express-session");
// bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "widget", saveUninitialized: true, resave: true }));
app.use(bodyParser.json());

// for transmiting data
const cors = require("cors");

app.use(cors());

// database
require("./db/mongoose");

// User handle
const { data, login, signup } = require("./handler/user");
const {
  add,
  edit,
  deletTask,
  trackTask,
  notifyTask
} = require("./handler/task");

// user
app.post("/login", login);
app.post("/signup", signup);

// Task
app.post("/scream", add);
// app.post("/scream/:screamId", edit);
// app.delete("/scream/:screamId", deletTask);

// listening port
app.listen(9000, () => {
  console.log("server is runnig on port 9000");
});
