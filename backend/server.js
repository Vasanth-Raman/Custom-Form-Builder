const express = require("express");
const env = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Good to go",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
