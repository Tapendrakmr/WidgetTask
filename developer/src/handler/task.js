const screamAccount = require("../models/task");
exports.add = async (req, res) => {
  const newScream = {
    heading: req.body.heading,
    briefOverview: req.body.briefOverview,
    body: req.body.body,
    userId: ""
  };
  const scream = new screamAccount(newScream);
  try {
    await scream.save();
    res.status(200).json("Scream add successfully " + newScream);
  } catch (err) {
    res.status(404).json("check your entries");
  }
};
exports.edit = (req, res) => {};
exports.deleteTask = (req, res) => {};
exports.trackTask = (req, res) => {};
exports.notifyTask = (req, res) => {};
