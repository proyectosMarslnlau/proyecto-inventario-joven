//Importamos EXPRESS
const express = require("express");
//Importamos las variables de entorno
require("dotenv").config({ path: "./variables.env" });
//Invocamos al archivo APP
const app = require("./app");
//Conexion de base de datos
const connectdb = require("./config/connectdb");
//--------------------------------------------------
//Importmaos las variables de entorno
const PORT = process.env.PORT;

//Importmoas la base de datos
connectdb();

app.listen(PORT, () => {
  console.log("-------------------------------------------------");
  console.log(`El servicio se abrio en el puerto ${PORT}`);
});
