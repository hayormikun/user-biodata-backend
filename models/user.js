const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    project: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
