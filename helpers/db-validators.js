const Role = require("../models/role.models");
const Usuario = require("../models/usuario.models");

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol }); //Esto te valida si el nombre del rol es igual al de tu DB - si existe esta OK
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
}; // Si no existe, tiramos este error

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo: correo });
  if (existeEmail) {
    throw new Error(`El Email: ${correo} ya fue registrado`);

  }
};

module.exports = {
  esRoleValido,
  emailExiste,
};
