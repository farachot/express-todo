const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) throw new Error("invalid user");

      if (bcrypt.compareSync(userLogin.password, user.password)) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: "2h" });

        res.status(200).json({
          message: "login berhasil",
          userId: user.id,
          token,
        });
      } else throw new Error("password salah");
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  regis: async (req, res) => {
    try {
      const { name, username, email, password } = req.body;
      if (!(name && username && email && password)) {
        res.status(400).send("semuanya harus diisi");
      }

      const existUser = await User.findOne({ email });
      if (existUser) {
        res.status(400).send("user sudah ada");
      }

      const encryptPw = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        username,
        email,
        password: encryptPw,
      });

      const token = jwt.sign({ id: user.id, email }, process.env.JWT_KEY, { expiresIn: "2h" });
      user.token = token;
      user.password = undefined;

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
};
