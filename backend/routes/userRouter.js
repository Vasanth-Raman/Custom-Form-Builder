const express = require("express");
const userRouter = express.Router();
const {
  getUsers,
  createNewUser,
  userLogin,
  userUpdate,
} = require("../controllers/userController");
const validateNewUser = require("../middleware/validateNewUser");
const validateUserUpdate = require("../middleware/validateUserUpdate");

//get all users
userRouter.get("/users", getUsers);

//register new user
userRouter.post("/register", validateNewUser, createNewUser);

//user login
userRouter.post("/login", userLogin);

//update user data
userRouter.put("/update/:id", validateUserUpdate, userUpdate);

module.exports = userRouter;
