const mongoose = require("mongoose");
const z = require("zod");

const validateUserUpdate = (req, res, next) => {
  const userId = req.params.id;
  const { userName, email, password } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the required fields",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password length should be minimum 6",
      });
    }
    //email validation using zod
    const emailSchema = z.string().email();
    const response = emailSchema.safeParse(email);
    if (!response.success) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid email",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = validateUserUpdate;
