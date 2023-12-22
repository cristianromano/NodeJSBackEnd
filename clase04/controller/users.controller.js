const usuarios = require("../db/users.js");

const getAllUsers = (req, res) => {
  res.json(usuarios);
};

const leerUsuario = (req, res) => {
  let id = req.params.id;
  let usuario = usuarios.find((usuario) => usuario.id == id);
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
  let usuario = usuarios.find((usuario) => usuario.id == id);
  let index = usuarios.indexOf(usuario);
  let { nombre, apellido } = req.body;
  let usuarioActualizado = {
    id: Number(id),
    nombre: nombre,
    apellido: apellido,
  };
  usuarios[index] = usuarioActualizado;
  res.status(200).json(usuarioActualizado);
};

module.exports = {
  getAllUsers,
  leerUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
};
