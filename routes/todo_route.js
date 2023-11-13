const express = require("express");
const route = express.Router();

const { getAllTodo, getTodoById, createTodo, deleteTodo, deleteAllTodo } = require("../controllers/todo_controller");
const verifyToken = require("../middleware/auth");

route.get("/", verifyToken, getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/many/:id", verifyToken, deleteAllTodo);

module.exports = route;
