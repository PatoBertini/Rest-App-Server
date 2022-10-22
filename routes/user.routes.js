const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { esRoleValido } = require("../helpers/db-validators");
const { emailExiste } = require("../helpers/db-validators");
const {
  usersGet,
  userDelete,
  usersPost,
  usersPut,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/", usersGet);

router.put("/:id", usersPut);

router.post(
  "/",
  [
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),
    check("nombre", "El Nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio y tener +6 letras").isLength({
      min: 6,
    }),
    check("rol").custom(esRoleValido),

    // check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos,
  ],
  usersPost
);

router.delete("/", userDelete);

module.exports = router;
