const { response } = require("express");
const Usuario = require("../models/usuario.models");
const bcryptjs = require("bcryptjs");
const {emailExiste} = require('../models/email.models')

const usersGet = (req, res) => {
  res.json({ msg: "Get api - Controller" });
};

const usersPut = (req, res) => {
  const id = req.params.id;
  res.json({ msg: "put api - Controller", id: id });
};

const usersPost = async (req, res) => {
 
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });


  // Encriptar la password
  const salt = bcryptjs.genSaltSync(); // Nro de vueltas de generar la encriptacion de la password - en defecto esta en 10
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar el usuario en BD
  await usuario.save(); 

  res.json({ msg: "post api - Controller", usuario });
};

const userDelete = (req, res) => {
  res.json({ msg: "delete api - Controller" });
};

module.exports = {
  usersGet,
  userDelete,
  usersPost,
  usersPut,
};
