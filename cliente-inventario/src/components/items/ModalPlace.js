import React, { Fragment, useEffect } from "react";
//Importamos la libreria M de materialize
import M from "materialize-css";

const ModalPlace = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);
  return (
    <Fragment>
      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalPlace;
