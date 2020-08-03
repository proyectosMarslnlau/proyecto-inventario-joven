import React, { Fragment, useEffect } from "react";
//Importamos la libreria M de materialize
import M from "materialize-css";
//Importamos el Item de Map para las areas
import MapModalPlace from "../items/MapModalPlace";

const ModalPlace = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);
  return (
    <Fragment>
      <div className="contenedor-mapmodalplace">
        <div id="modal1" class="modal modal-fixed-footer">
          <div class="modal-content">
            <MapModalPlace />
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalPlace;
