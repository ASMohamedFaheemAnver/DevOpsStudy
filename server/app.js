const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.json({ msg: "200K OK!" });
});

app.get("/mode", (_, res) => {
  res.json({ mode: "process.env.MODE" });
});

app.get("/hash", (_, res) => {
  res.json({ hash: Math.random() });
});

module.exports = app;
