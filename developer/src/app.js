// take express
const express = require("express");
const app = express();

//session
// const session = require("express-session");
// bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({ secret: "widget", saveUninitialized: true, resave: true }));
app.use(bodyParser.json());

// for transmiting data
const cors = require("cors");

app.use(cors());

// database
require("./db/mongoose");

// User handle
const { login, signup, profile, logout } = require("./handler/user");
const { getAllScream, add, editTask } = require("./handler/task");

// user
app.post("/login", login);
app.post("/signup", signup);
app.get("/profile/:id", profile);
// app.post("/logout", logout);
// Task

app.get("/allTask/:userid", getAllScream);
app.post("/taskadd", add);
app.patch("/taskedit/:taskId", editTask); //edit task
// app.post("/scream/:screamId", edit);
// app.delete("/scream/:screamId", deletTask);

// listening port
app.listen(9000, () => {
  console.log("server is runnig on port 9000");
});
