const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8070;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  req.header("Content-Type", "text/html");
  res.send("<h1 style='color:red'> Hola</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
