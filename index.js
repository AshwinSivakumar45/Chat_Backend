const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const cors = require("cors");
const connection = require("./Config/connection");

const app = express();

dotenv.config();
connection();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api running");
});

app.get("/chat", (req, res) => {
  res.send(chats);
});

app.get("/chat/:id", async (req, res) => {
  console.log(req.params.id);
  const single = await chats.find((item) => item._id === req.params.id);
  res.send(single);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is Running", PORT);
});
