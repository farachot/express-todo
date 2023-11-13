const express = require("express");
const route = express.Router();
const { getAlluser, createUsers, getUserById, getUserTodos } = require("../controllers/user_controller");
const verifyToken = require("../middleware/auth");

route.get("/", getAlluser);
route.post("/", createUsers);
route.get("/:id/todos", verifyToken, getUserTodos);
route.get("/:id", verifyToken, getUserById);

module.exports = route;
