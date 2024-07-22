const z = require("zod");

const validateNewUser = (req, res, next) => {
  const { userName, email, password } = req.body;
  try {
    //checking if all the required fields are present
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the required fields",
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
  } catch (error) {}
};

module.exports = validateNewUser;
