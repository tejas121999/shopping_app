var bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes/api");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");
require("dotenv").config();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//   console.log("table is sync");
// });

app.get("/get", async (req, res) => {
  return res.status(200).json({ msg: "working success" });
});

module.exports = app;
