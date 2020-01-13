const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      trim: true
    },
    overview: {
      type: String,

      trim: true
    },
    summary: {
      type: String,
      trim: true
    },
    userId: {
      type: String,
      trim: true
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const screamAccount = mongoose.model("ScreamAccount", userSchema);
module.exports = screamAccount;
