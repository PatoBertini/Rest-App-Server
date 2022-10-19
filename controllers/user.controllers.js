const { response } = require("express");

const usersGet = (req, res) => {

  res.json({ msg: "Get api - Controller" });
};

const usersPut = (req, res) => {
  const id = req.params.id;
  res.json({ msg: "put api - Controller", id: id });
};

const usersPost = (req, res) => {
  const body = req.body;

  res.json({ msg: "post api - Controller", body });
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
