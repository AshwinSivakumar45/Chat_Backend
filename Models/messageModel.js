const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sender: {
      type: String,
    },
    content: {
      type: String,
    },
    chat: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Messaage", messageModel);

module.exports = { Message };
