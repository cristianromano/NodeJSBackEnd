import express from "express";
import controller from "../controller/users.controller.js";
const routerUsuarios = express.Router();

routerUsuarios.get("/", controller.getAllUsers);

routerUsuarios.get("/:id", controller.leerUsuario);

routerUsuarios.put("/:id", controller.actualizarUsuario);

routerUsuarios.post("/", controller.crearUsuario);

routerUsuarios.delete("/:id", controller.borrarUsuario);

export default routerUsuarios;
