import React, { Fragment, useEffect, useContext } from "react";
import "../../sheet_page/scss/items/style_modalpreview.scss";
//Importamos la libreria de M de materialize
import M from "materialize-css";
//Importamos el CONTEXT
import inventarioContext from "../../context/inventarioContext";

const ModalPreview = ({ vistaprevia }) => {
  //Importamos las librerias del CONTEXT
  const { datosactivo } = useContext(inventarioContext);

  //
  console.log(vistaprevia);
  //UseEffect para poder inicializar los modales
  useEffect(() => {
    var elems = document.querySelectorAll(".modal-preview");
    var instances = M.Modal.init(elems, {});
  }, []);

  return (
    <Fragment>
      <div className="contenedor-modalpreview">
        <div id="modal-preview" class="modal modal-preview">
          <div class="modal-content">
            <h4>Vista Previa</h4>
            <div className="row">
              <div className="col s6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae placeat fugit repudiandae quam inventore quod, odio
                  cupiditate mollitia. Sed, laboriosam hic? Veritatis sint ea
                  odio reiciendis! Atque cum accusamus perferendis.
                </p>
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
