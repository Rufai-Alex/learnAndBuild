const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const PORT = 3333;

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

let data = null;
app.post("/data", (req, res) => {
  data = req.body;
  res.json(data);
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(` Listening  at ${PORT}`);
});
