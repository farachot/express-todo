const User = require("../models/user_model");
const Todo = require("../models/todo_model");

module.exports = {
  getAlluser: async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      message: "berhasil mendapat user",
      data: users,
    });
  },
  getUserTodos: async (req, res) => {
    const { id } = req.params;

    const todos = await Todo.find({ userId: id });

    res.status(200).json(todos);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const users = await User.findById(id);

    res.status(200).json(users);
  },

  createUsers: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.json(200)({
      message: "berhasil membuat data",
    });
  },
};
