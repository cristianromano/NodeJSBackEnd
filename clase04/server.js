const express = require("express");
const usuarios = require("./db/users");
const {
  getAllUsers,
  leerUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
} = require("./controller/users.controller");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users", getAllUsers);

app.get("/api/users/:id", leerUsuario);

app.put("/api/users/:id", actualizarUsuario);

app.post("/api/users", crearUsuario);

app.delete("/api/users/:id", borrarUsuario);

app.all("*", (req, res) => {
  let method = req.method;
  let url = req.url;
  res
    .status(404)
    .send(`<h1>Metodo ${method} con la URL ${url} no existe , ERR 404</h1>`);
});
