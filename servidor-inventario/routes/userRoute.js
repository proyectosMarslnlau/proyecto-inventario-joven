//Importamos la libreria de ROUTAS
const express = require("express");
//Importamos Route
const router = express.Router();
//Importamos CHECK VALIDATOR
const { check } = require("express-validator");
//Importamos el CONTROLLER
const userController = require("../controllers/userController");
//--------------------------------
module.exports = () => {
  router.post(
    "/user-create",
    [
      check("usuario", "El nombre es obligatorio").not().isEmpty(),
      check("password", "Se require un minimo de 5 caracteres").isLength({
        min: 6,
      }),
      check("email", "El email es obligatorio").not().isEmpty(),
    ],
    userController.createUser
  );

  return router;
};
