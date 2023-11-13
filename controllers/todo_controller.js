const Todo = require("../models/todo_model");

module.exports = {
  getAllTodo: async (req, res) => {
    const user = req.user;

    const todos = await Todo.find({ userId: user.id }).populate("userId", ["id", "name"]);

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos,
    });
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    res.json(todo);
  },

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);

    res.json({
      message: "berhasil membuat data todo",
    });
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id).deleteOne();

    res.status(200).json(todo);
  },

  deleteAllTodo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.deleteMany({ userId: id });

    res.status(200).json(todo);
  },
};
