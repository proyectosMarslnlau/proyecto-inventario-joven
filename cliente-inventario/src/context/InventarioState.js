import React, { useReducer } from "react";
//Importamos los REDUCER
import inventarioReducer from "./inventarioReducer";
import inventarioContext from "./inventarioContext";
//Importamos los TYPES
import { GUARDAR_UBICACION } from "../types/index";

const InventarioState = (props) => {
  const initialState = {
    login: true,
    ubicacion: "",
  };
  const [state, dispatch] = useReducer(inventarioReducer, initialState);

  const guardarUbicacion = (valor) => {
    dispatch({
      type: GUARDAR_UBICACION,
      payload: valor,
    });
  };
  return (
    <inventarioContext.Provider
      value={{
        login: state.login,
        ubicacion: state.ubicacion,
        guardarUbicacion,
      }}
    >
      {props.children}
    </inventarioContext.Provider>
  );
};

export default InventarioState;
