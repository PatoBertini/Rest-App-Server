const { Router } = require("express");
const {
  usersGet,
  userDelete,
  usersPost,
  usersPut,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/", usersGet);

router.put("/:id", usersPut);

router.post("/", usersPost);

router.delete("/", userDelete);

module.exports = router;
