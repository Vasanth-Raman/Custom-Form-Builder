const express = require("express");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const validateNewUser = require("../middleware/validateNewUser");

//get all users
userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean();
    res.status(200).json({
      success: true,
      message: "All users fetched",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
});

userRouter.post("/register", validateNewUser, async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      $or: [{ userName: userName }, { email: email }],
    });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists. Try with different one",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, secret);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email }).lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please Sign Up",
      });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Please enter correct password",
      });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "24h" });

    res.status(202).json({
      success: true,
      message: "Login Successful",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
});

module.exports = userRouter;
