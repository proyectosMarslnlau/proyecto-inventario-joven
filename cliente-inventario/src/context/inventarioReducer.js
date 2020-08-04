//Importamo los types par alas funciones del STATE
import { GUARDAR_UBICACION } from "../types/index";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_UBICACION:
      return {
        ...state,
        ubicacion: action.payload,
      };
    default:
      return state;
  }
};
