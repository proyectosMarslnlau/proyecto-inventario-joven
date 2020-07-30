import React, { Fragment } from "react";
//Importamos la libreria de ROUTAS
import { Route, Switch } from "react-router-dom";
//Importamos los componentes
import Start from "../parts/Start";

import EnterData from "../parts/EnterData";
import EditData from "../parts/EditData";
import ReportData from "../parts/ReportData";
//Importamos el ERROR de pagina
import ErrorPage from "../error/ErrorPage";

const Navigation = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/ingresar-datos" component={EnterData} />
        <Route exact path="/editar-datos" component={EditData} />
        <Route exact path="/reporte-datos" component={ReportData} />
        <Route component={ErrorPage} />
      </Switch>
    </Fragment>
  );
};

export default Navigation;
