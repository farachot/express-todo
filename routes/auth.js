const express = require("express");
const route = express.Router();

const { login, regis } = require("../controllers/auth_controllers");

route.post("/login", login);
route.post("/regis", regis);

module.exports = route;
