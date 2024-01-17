import usuarios from "../db/users.js";

import models from "../models/users.model.js";

const getAllUsers = (req, res) => {
  const user = models.getAll();
  res.json(user);
};

const leerUsuario = (req, res) => {
  let id = req.params.id;

  let usuario = models.getById(Number(id));
  Object.keys(usuario).length === 0
    ? res.status(404).send("Usuario no encontrado")
    : res.status(200).json(usuario);
};

const crearUsuario = (req, res) => {
  let { nombre, apellido, edad, sexo, email } = req.body;
  let nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sexo: sexo,
    email: email,
  };
  usuarios.push(nuevoUsuario);
  res.status(200).json(nuevoUsuario);
};

const borrarUsuario = (req, res) => {
  let id = req.params.id;
  let usuario = usuarios.find((usuario) => usuario.id == id);
  let index = usuarios.indexOf(usuario);
  usuarios.splice(index, 1);
  res.status(200).json(usuario);
};

const actualizarUsuario = (req, res) => {
  let id = req.params.id;
  models.updateById(Number(id), req);

  res.status(200).json(usuarioActualizado);
};

export default {
  getAllUsers,
  leerUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
};
