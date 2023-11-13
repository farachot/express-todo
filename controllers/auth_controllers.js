const User = require("../models/user_model");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) throw new Error("invalid user");
      if (user.password !== userLogin.password) throw new Error("invalid user");

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY);

      res.json({
        message: "login berhasil",
        userId: user.id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },
  regis: async (req, res) => {},
};
