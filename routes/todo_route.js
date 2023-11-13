const express = require("express");
const route = express.Router();

const { getAllTodo, getTodoById, createTodo, deleteTodo, deleteAllTodo, editTodo } = require("../controllers/todo_controller");
const verifyToken = require("../middleware/auth");

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/many/:id", verifyToken, deleteAllTodo);
route.put("/:id", verifyToken, editTodo);

module.exports = route;
