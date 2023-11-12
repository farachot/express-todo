const express = require("express");
const route = express.Router();

const userRoute = require("./user_route");

route.get("/", (req, res) => {
  res.json("berhasil");
});

route.use("/users", userRoute);

module.exports = route;
