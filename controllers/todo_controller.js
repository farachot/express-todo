const Todo = require("../models/todo_model");

module.exports = {
  getAllTodo: async (req, res) => {
    const user = req.user;

    const todos = await Todo.find().populate("userId", ["name", "email"]);

    res.status(200).json({
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

    res.status(200).json({
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
  editTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (todo) {
        res.status(200).json({
          message: "Berhasil mengedit data todo",
          data: todo,
        });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
