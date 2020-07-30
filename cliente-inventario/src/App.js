import React, { Fragment } from "react";
//Importmos el MATERIALIZE
import "materialize-css/dist/css/materialize.min.css";
//Importamos el Contenedor de la aplicacion
import Container from "./components/parts/Container";
//Importamos el invetarioState
import InventarioState from "./context/InventarioState";

const App = () => {
  return (
    <Fragment>
      <InventarioState>
        <Container />
      </InventarioState>
    </Fragment>
  );
};

export default App;
