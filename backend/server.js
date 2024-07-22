const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnect");
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Good to go",
  });
});

app.use("/api/v1/user", userRouter);

app.listen(PORT, async () => {
  await connectDb();
});
