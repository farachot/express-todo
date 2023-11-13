const User = require("../models/user_model");

module.exports = {
  getAlluser: async (req, res) => {
    const users = await User.find();

    res.json({
      message: "berhasil mendapat user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const users = await User.findById(id);

    res.json(users);
  },

  createUsers: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.json({
      message: "berhasil membuat data",
    });
  },
};
