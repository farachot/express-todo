const express = require("express");
const route = express.Router();
const { getAlluser, createUsers } = require("../controllers/user_controller");

route.get("/", getAlluser);
route.post("/", createUsers);

module.exports = route;
