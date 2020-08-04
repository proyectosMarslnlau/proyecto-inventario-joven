import React, { Fragment, useEffect, useContext, useState } from "react";

//Importamos la libreria de M materialize
import M from "materialize-css";

//Importamos el MODAL
import ModalPlace from "../items/ModalPlace";

//Importamos el CONTEXT
import inventarioContext from "../../context/inventarioContext";

const EnterData = () => {
  //Extraemos las variables necesarias del STATE
  const { ubicacion } = useContext(inventarioContext);

  //Extraemos los datos del formulario
  const [dato, guardarDatos] = useState({
    codigo: "",
    nombre: "",
    lugar: "",
    costo: "",
    anio: "",
    depreciacion: "",
  });

  const onChangeDato = (e) => {
    guardarDatos({
      ...dato,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitFormulario = (e) => {
    e.preventDefault();
    dato.lugar = ubicacion;
    console.log(dato);
  };
  //UseEffect para poder Inicializar Select
  useEffect(() => {
    //Linea de codigo para iniciar el SELECT
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  //Funcion para poder abrir el modal
  const openModalPlace = (e) => {
    e.preventDefault();
    //Linea par apoder Abrir el codigo de MODAL
    var elem = document.querySelector("#modal1");
    var instance = M.Modal.getInstance(elem);
    instance.open();
  };

  return (
    <Fragment>
      <div className="contenedor-enterdata">
        <div className="container row">
          <div className="col s12">
            <form onSubmit={onSubmitFormulario}>
              <div className="row">
                <div>Codigo de Activo</div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="codigo"
                    type="text"
                    defaultValue="LNLAU-"
                    name="codigo"
                    onChange={onChangeDato}
                  />
                </div>

                <div>Nombre de Activo</div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input
                    id="nombre"
                    type="tel"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={onChangeDato}
                  />
                </div>

                <div>Lugar de Activo</div>
                <div className="row">
                  <div className="col s6">
                    <button
                      className="waves-effect waves-light btn col s12"
                      onClick={openModalPlace}
                    >
                      LUGAR
                    </button>
                    <ModalPlace />
                  </div>
                  <div className="col s6">
                    <div name="lugar" className="lugar">
                      {ubicacion == "" ? "Ingrese una Ubicacion" : ubicacion}
                    </div>
                  </div>
                </div>

                <div>Costo de Activo</div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input
                    id="costo"
                    type="tel"
                    placeholder="Costo de Compra"
                    name="costo"
                    onChange={onChangeDato}
                  />
                </div>

                <div>Año de compra de Activo</div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <select defaultValue="" name="anio" onChange={onChangeDato}>
                    <option value="" selected>
                      Elija un Año
                    </option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>

                <div>Depreciacion de Activo</div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <input
                    id="nombre"
                    type="tel"
                    placeholder="Depreciacion"
                    name="depreciacion"
                    onChange={onChangeDato}
                  />
                </div>

                <div className="col s6 center-align">
                  <button className="waves-effect waves-light btn-large">
                    VISTA PREVIA
                  </button>
                </div>
                <div className="col s6 center-align">
                  <button
                    className="waves-effect waves-light btn-large"
                    type="submit"
                  >
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
