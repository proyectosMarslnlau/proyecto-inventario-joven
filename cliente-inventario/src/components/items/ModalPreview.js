import React, { Fragment, useEffect, useContext } from "react";
import "../../sheet_page/scss/items/style_modalpreview.scss";
//Importamos la libreria de M de materialize
import M from "materialize-css";
//Importamos el CONTEXT
import inventarioContext from "../../context/inventarioContext";

const ModalPreview = ({ vistaprevia }) => {
  //------------------------------------------------------------
  //UseEffect para poder inicializar los modales
  //------------------------------------------------------------
  useEffect(() => {
    var elems = document.querySelectorAll(".modal-preview");
    var instances = M.Modal.init(elems, {});
  }, []);
  //------------------------------------------------------------
  //Importamos las librerias del CONTEXT
  //------------------------------------------------------------
  const { datosactivo } = useContext(inventarioContext);

  //if (datosactivo === null) return null;

  const { codigo, nombre, costo, descripcion } = datosactivo;
  //---------------------------------------------------------------------------
  //Inicio del programa
  //---------------------------------------------------------------------------
  return (
    <Fragment>
      <div className="contenedor-modalpreview">
        <div id="modal-preview" class="modal modal-preview">
          <div class="modal-content">
            <h4>Vista Previa</h4>
            <div className="row left-align">
              <div className="col s6">
                <div>
                  Codigo : <strong>{codigo}</strong>
                </div>
                <div>
                  Nombre : <strong>{nombre}</strong>
                </div>
                <div>
                  Costo : <strong>{costo}</strong>
                </div>
                <div>
                  Año : <strong>{costo}</strong>
                </div>
                <div>
                  Descripcion : <strong>{descripcion}</strong>
                </div>
              </div>
              <div className="col s6">
                <img src={vistaprevia} alt="" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Salir
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalPreview;
