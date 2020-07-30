import React, { useReducer } from "react";
//Importamos los REDUCER
import inventarioReducer from "./inventarioReducer";
import inventarioContext from "./inventarioContext";

const InventarioState = (props) => {
  const initialState = {
    login: true,
  };
  const [state, dispatch] = useReducer(inventarioReducer, initialState);
  return (
    <inventarioContext.Provider
      value={{
        login: state.login,
      }}
    >
      {props.children}
    </inventarioContext.Provider>
  );
};

export default InventarioState;
