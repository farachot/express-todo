const express = require("express");
const route = express.Router();
const userRoute = require("./user_route");
const authRoute = require("./auth");
const todoRoute = require("./todo_route");

route.get("/", (req, res) => {
  res.json("berhasil");
});

route.use("/users", userRoute);
route.use("/auth", authRoute);
route.use("/todos", todoRoute);

module.exports = route;
