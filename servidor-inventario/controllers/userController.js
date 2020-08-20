//Importmaos express
const express = require("express");
//Importamos los resultados de express-VALIDATOS
const { validationResult } = require("express-validator");
//Importamos la variables de entorno
require("dotenv").config({ path: "../variables.env" });
//Importamos los modells
const userModell = require("../modells/userModell");
//-----------------------------------------------
exports.createUser = async (req, res) => {
  //Verificamos lore sultados de express validator
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }

  //Extraemos los datos de REQ
  const { usuario, password, email } = req.body;

  try {
    //Verificamos si el usuario esta en la base de datos
    let user = await userModell.findOne({ $or: [{ usuario }, { email }] });
    if (user) {
      return res.status(400).json({ msg: "EL USUARIO YA EXISTE" });
    }

    //Instanciamos al usuario
    const valor = new userModell(req.body);

    //Guardamos los datos
    const guardarUsuario = await valor.save();
    if (!guardarUsuario) {
      return res.status(400).json({ msg: "EL ERROR AL GUARDAR DATOS" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};
exports.authUser = async (req, res) => {};
