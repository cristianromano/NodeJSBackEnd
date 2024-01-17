import arr from "../db/users.js";

const getAll = () => {
  const user = arr.usuarios;
  return user;
};

const getById = (id) => {
  {
    const user = arr.usuarios.find((user) => user.id == id);
    return user;
  }
};

const updateById = (id, req) => {
  const user = arr.usuarios.find((user) => user.id == id);
  let index = user.indexOf(usuario);
  let { nombre, apellido } = req.body;
  let usuarioActualizado = {
    id: Number(id),
    nombre: nombre,
    apellido: apellido,
  };
  arr.usuarios[index] = usuarioActualizado;
  return user;
};

export default {
  getAll,
  getById,
  updateById,
};
