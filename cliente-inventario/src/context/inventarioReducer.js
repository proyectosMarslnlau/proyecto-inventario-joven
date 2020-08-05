//Importamo los types par alas funciones del STATE
import { GUARDAR_UBICACION, GUARDAR_INFORMACION } from "../types/index";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_UBICACION:
      return {
        ...state,
        ubicacion: action.payload,
      };

    case GUARDAR_INFORMACION:
      return {
        ...state,
        datosactivo: action.payload,
      };

    default:
      return state;
  }
};
