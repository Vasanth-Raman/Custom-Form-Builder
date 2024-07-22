const express = require("express");
const userRouter = express.Router();
const {
  getUsers,
  createNewUser,
  userLogin,
} = require("../controllers/userController");
const validateNewUser = require("../middleware/validateNewUser");

//get all users
userRouter.get("/users", getUsers);

userRouter.post("/register", validateNewUser, createNewUser);

userRouter.post("/login", userLogin);

module.exports = userRouter;
