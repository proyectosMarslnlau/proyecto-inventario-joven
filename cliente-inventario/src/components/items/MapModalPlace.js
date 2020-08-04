import React, { Fragment, useContext } from "react";
//Importamos el archivo SASS para los estilos
import "../../sheet_page/scss/items/style_mapmodalplace.scss";

//Importamos el JSON de mapeo
import mapStudio from "../../sheet_page/json/mapStudio.json";

//Importamos la funcion de HELPER
import { selectorUbicacion } from "../../sheet_page/js/helpers";

//Importamos la libreria de para la redimension de Mapas
import { ImageMap } from "@qiuz/react-image-map";

//Importamos el CONTEXT
import inventarioContext from "../../context/inventarioContext";

//Importamos la libreria de M materialize
import M from "materialize-css";

const MapModalPlace = () => {
  const { ubicacion, guardarUbicacion } = useContext(inventarioContext);

  const img = "/sheet_public/img/2.png";

  const onMapClick = (area, index) => {
    const tip = `${area.href || index + 1}`;

    //Seleccionamos la ubicacion de nuestra funcion del archivo HELPER
    const ubicacion = selectorUbicacion(tip);

    //Guardamos en el initial STATE
    guardarUbicacion(ubicacion);

    //Linea par apoder Abrir el codigo de MODAL
    var elem = document.querySelector("#modal1");
    var instance = M.Modal.getInstance(elem);
    instance.close();
  };
  return (
    <Fragment>
      <div className="contenedor-mapmodalplace">
        <ImageMap
          className="usage-map imagen"
          src={img}
          map={mapStudio.mapeo}
          onMapClick={onMapClick}
        />
      </div>
    </Fragment>
  );
};

export default MapModalPlace;
