const express = require("express");
require("dotenv").config();
const app = express();
const BodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(BodyParser.json());

app.get("/", (req, res) => {
  res.send("Api is Working");
});

app.use("/api/math/", require("./routes/eval.route"));

app.listen(port, () => {
  console.log(`App Listening on the port: ${port}`);
});
