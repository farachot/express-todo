const express = require("express");
const route = express.Router();
const userRoute = require("./user_route");
const authRoute = require("./auth");

route.get("/", (req, res) => {
  res.json("berhasil");
});

route.use("/users", userRoute);
route.use("/auth", authRoute);

module.exports = route;
