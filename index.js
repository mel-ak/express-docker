const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Docker latest! sorry this is erroe");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});