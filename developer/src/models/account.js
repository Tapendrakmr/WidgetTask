const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      trim: true
    },
    confirmPassword: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const userAccount = mongoose.model("UserAccount", userSchema);
module.exports = userAccount;
