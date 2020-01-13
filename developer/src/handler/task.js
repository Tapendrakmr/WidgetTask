const screamAccount = require("../models/task");

exports.getAllScream = async (req, res) => {
  const userid = req.params.userid;
  let taskcollection = [];

  const tasks = await screamAccount.find({ userId: userid });

  tasks.forEach(doc => {
    taskcollection.push({
      taskId: doc._id,
      heading: doc.heading,
      overview: doc.heading,
      summary: doc.heading,
      date: doc.updatedAt
    });
  });

  console.log(taskcollection);
  res.status(200).send(taskcollection);
};

exports.add = async (req, res) => {
  const newScream = {
    heading: req.body.heading,
    overview: req.body.overview,
    summary: req.body.summary,

    userId: req.body.userId
  };
  console.log(newScream);
  const scream = new screamAccount(newScream);
  try {
    await scream.save();
    res.status(200).json("Scream add successfully " + newScream);
  } catch (err) {
    res.status(404).json("check your entries");
  }
};
exports.editTask = async (req, res) => {
  const taskId = req.params.taskId;
  const newScream = {
    heading: req.body.heading,
    overview: req.body.overview,
    summary: req.body.summary,

    userId: req.body.userId
  };
  try {
    const task = await screamAccount.findById(taskId);
    console.log(task.heading);
    if (!newScream.heading) {
      newScream.heading = task.heading;
    } else if (!newScream.overview) {
      newScream.overview = task.overview;
    } else if (!newScream.summary) {
      newScream.summary = task.summary;
    }
    const id = { _id: taskId };
    const data = {
      heading: newScream.heading,
      overview: newScream.overview,
      summary: newScream.summary
    };
    const check = await screamAccount.findOneAndUpdate(id, data);
    console.log("hello");

    if (check) {
      const newtask = await screamAccount.findById(taskId);
      console.log(newtask);
      res.status(200).send(newtask);
    } else {
      res.status(404).send("error");
    }
  } catch (e) {
    res.status(500).send("server error");
  }
};
exports.deleteTask = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const taskdelete = await screamAccount.findByIdAndDelete({ _id: taskId });
    if (taskdelete) {
      res.status(200).send(taskdelete);
    } else {
      res.status(404).send("error");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
exports.trackTask = (req, res) => {};
exports.notifyTask = (req, res) => {};
