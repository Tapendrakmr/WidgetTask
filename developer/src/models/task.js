const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      trim: true
    },
    briefOverview: {
      type: String,
      unique: true,
      trim: true
    },
    body: {
      type: String,
      trim: true
    },
    userId: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const screamAccount = mongoose.model("ScreamAccount", userSchema);
module.exports = screamAccount;
