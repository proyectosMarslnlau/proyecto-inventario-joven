//Importamos Express
const express = require("express");
const { json } = require("express");
//Importamos las variables de entorno
require("dotenv").config({ path: "./variables.env" });
//Instanciamos la variable de app
const app = express();
//Importamos la libreria de ROUTAS
const userRoute = require("./routes/userRoute");
//-----------------------------------------------
//Importamos la libreria que permite exptraer datos de REQ.BODY
app.use(express.json({ extended: true }));
//Importamos las ROUTAS
app.use("/inventario", userRoute());

module.exports = app;
