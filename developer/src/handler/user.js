const Account = require("../models/account");
// login
exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await Account.findOne({ email });

  try {
    if (user.email === email && user.password === password) {
      res.status(200).send("loging ");
    } else {
      res.status(404).send("check entries");
    }
  } catch (err) {
    res.status(505).send("server error");
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
  const account = new Account(userDate);
  try {
    await account.save();
    res.status(200).send("data entered successfully" + userDate);
  } catch (e) {
    res.status(404).send(e);
    console.log("Error " + e);
  }
  console.log(userDate);
};
