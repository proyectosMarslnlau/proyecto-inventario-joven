//Importamos mongoose
const mongoose = require("mongoose");

//-----------------------------------------------
const userSchema = mongoose.Schema({
  usuario: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model("usuarios", userSchema);
