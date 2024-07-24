const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnect");
const verifyToken = require("./middleware/verifyToken");
const userRouter = require("./routes/userRouter");
const folderRouter = require("./routes/folderRouter");
const formRouter = require("./routes/formRouter");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/folder", verifyToken, folderRouter);

app.use("/api/v1/form", verifyToken, formRouter);

app.listen(PORT, async () => {
  await connectDb();
});
