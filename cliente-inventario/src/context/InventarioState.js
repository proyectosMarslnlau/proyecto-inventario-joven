import React, { useReducer } from "react";
//Importamos los REDUCER
import inventarioReducer from "./inventarioReducer";
import inventarioContext from "./inventarioContext";
//Importamos los TYPES
import { GUARDAR_UBICACION, GUARDAR_INFORMACION } from "../types/index";

const InventarioState = (props) => {
  const initialState = {
    login: true,
    ubicacion: "",
    datosactivo: "",
  };
  const [state, dispatch] = useReducer(inventarioReducer, initialState);

  const guardarUbicacion = (valor) => {
    dispatch({
      type: GUARDAR_UBICACION,
      payload: valor,
    });
  };
  const guardarInformacion = (valor) => {
    dispatch({
      type: GUARDAR_INFORMACION,
      payload: valor,
    });
  };
  return (
    <inventarioContext.Provider
      value={{
        login: state.login,
        ubicacion: state.ubicacion,
        datosactivo: state.datosactivo,
        guardarUbicacion,
        guardarInformacion,
      }}
    >
      {props.children}
    </inventarioContext.Provider>
  );
};

export default InventarioState;
