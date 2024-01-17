import express from "express";
import controller from "./controller/users.controller.js";
import routerUsuarios from "./router/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", routerUsuarios);

app.all("*", (req, res) => {
  let method = req.method;
  let url = req.url;
  res
    .status(404)
    .send(`<h1>Metodo ${method} con la URL ${url} no existe , ERR 404</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
