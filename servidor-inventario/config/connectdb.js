//Improtamos mongoose
const mongoose = require("mongoose");
const connectDB = require("../../../curso-mern/end-points-2/config/configDB");
//Importamos las variables de entorno
require("dotenv").config({ path: "../variables.env" });

//-------------------------------------------------------
//Importamos las variables de entorno
const PORT_DB = process.env.PORT_DB;
const IP_SERVER = process.env.IP_SERVER;
const DATA_BASE = process.env.DATA_BASE;

const connectdb = async () => {
  try {
    mongoose.connect(
      `mongodb://${IP_SERVER}:${PORT_DB}/${DATA_BASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (error) => {
        if (error) {
          console.log("No se pudo contectar a la base de datos");
        } else {
          console.log("-------------------------------------------------");
          console.log(`Base de datos Conectada`);
          console.log(
            `Puerto: ${PORT_DB}, Database: ${DATA_BASE}, IP: ${IP_SERVER}`
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectdb;
