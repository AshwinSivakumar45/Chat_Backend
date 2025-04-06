const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: String,
      },
    ],
    latestMessage: {
      type: String,
    },
    groupAdmin: {
      type: String,
    },
  },
  { timestamps: true }
);

const chat = mongoose.model("chat", chatModel);

module.exports = { chat };
