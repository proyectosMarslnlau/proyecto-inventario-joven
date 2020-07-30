import React, { Fragment, useEffect } from "react";
//Importamos la libreria de M materialize
import M from "materialize-css";
//Importamos el MODAL
import ModalPlace from "../items/ModalPlace";

const EnterData = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  const openModalPlace = (e) => {
    e.preventDefault();
    //Linea par apoder Abrir el codigo
    var elem = document.querySelector("#modal1");
    var instance = M.Modal.getInstance(elem);
    instance.open();
    console.log("Lenny Luara Vlanecia");
  };
  return (
    <Fragment>
      <div className="contenedor-enterdata">
        <div className="container row">
          <div className="col s12">
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="codigo"
                    type="text"
                    placeholder="Codigo"
                    value="LNLAU-"
                  />
                  <label htmlFor="codigo">Codigo</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input id="nombre" type="tel" placeholder="Nombre" />
                  <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="row">
                  <div className="col s6">
                    <button
                      className="waves-effect waves-light btn-large col s12"
                      onClick={openModalPlace}
                    >
                      LUGAR
                    </button>
                    <ModalPlace />
                  </div>
                  <div className="col s6">
                    <div className="input-field">
                      <i className="material-icons prefix">phone</i>
                      <input id="nombre" type="tel" placeholder="Nombre" />
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                  </div>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input id="nombre" type="tel" placeholder="Costo de Compra" />
                  <label htmlFor="nombre">
                    Costo de Compra <small>Expresado en Bolivianos</small>
                  </label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <select defaultValue="">
                    <option value="" selected>
                      Elija un Año
                    </option>
                    <option value="1">2010</option>
                    <option value="2">2011</option>
                    <option value="3">2012</option>
                    <option value="3">2013</option>
                    <option value="3">2014</option>
                    <option value="3">2015</option>
                    <option value="3">2016</option>
                    <option value="3">2017</option>
                    <option value="3">2018</option>
                    <option value="3">2019</option>
                    <option value="3">2020</option>
                    <option value="3">2021</option>
                  </select>
                  <label>Materialize Select</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input id="nombre" type="tel" placeholder="Costo de Compra" />
                  <label htmlFor="nombre">Porcentaje de Depreciacion</label>
                </div>
                <div className="col s6 center-align">
                  <button className="waves-effect waves-light btn-large">
                    REGISTRAR
                  </button>
                </div>
                <div className="col s6 center-align">
                  <button className="waves-effect waves-light btn-large">
                    REGISTRAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EnterData;
