// session
const express = require("express");
const session = require("client-sessions");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    cookieName: "session",
    secret: "widgetTask",
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
  })
);
app.use(bodyParser.json());

const Account = require("../models/account");

// login
exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await Account.find({ email: email, password: password });
  let tempauth;
  if (user) {
    try {
      tempauth = user[0]._id;
      res.status(200).send(tempauth);
    } catch (e) {
      res.status(500).status("server error");
    }
  } else {
    res.status(400).send("check You entires");
  }
};

// SignUp
exports.signup = async (req, res) => {
  // res.send("signup");
  const userDate = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };
  let tempauth;
  const account = new Account(userDate);
  try {
    await account.save();
    const email = userDate.email;
    const password = userDate.password;
    // to again login
    const user = await Account.find({ email: email, password: password });
    if (user) {
      tempauth = user[0]._id;
    }

    res.status(200).send(tempauth);
  } catch (e) {
    res.status(404).send(e);
    console.log("Error " + e);
  }
  console.log(userDate);
};

// Profile of user
exports.profile = async (req, res) => {
  const userid = req.params.id;
  console.log(userid);
  const userinfo = await Account.find({ _id: userid });
  console.log(userinfo);
  if (userinfo[0]) {
    try {
      res.status(200).send(userinfo[0]);
    } catch (e) {
      res.status(500).send("e");
    }
  } else {
    res.status(400).send("not exist");
  }

  // console.lg(user);
};
