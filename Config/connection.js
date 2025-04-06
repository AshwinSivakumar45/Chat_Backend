require("dotenv").config();
const mongoose = require("mongoose");

const connection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (e) {
    console.log("Error Message:", e.message);
  }
};

module.exports = connection;
