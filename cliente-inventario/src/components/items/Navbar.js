import React, { Fragment, useEffect } from "react";
//Importamos la libreria M de materialize
import M from "materialize-css";
//Importmos la libreria de LINK
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }, []);
  return (
    <Fragment>
      <div className="contenedor-navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/ingresar-datos">Inscribir</Link>
              </li>
              <li>
                <Link to="/editar-datos">Editar</Link>
              </li>
              <li>
                <Link to="/reporte-datos">Informes PDF</Link>
              </li>
              <li>
                <a href="#!">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/ingresar-datos" className="sidenav-close">
              Inscribir
            </Link>
          </li>
          <li>
            <Link to="/editar-datos" className="sidenav-close">
              Editar
            </Link>
          </li>
          <li>
            <Link to="/reporte-datos" className="sidenav-close">
              Informes PDF
            </Link>
          </li>
          <li>
            <a href="#!">Cerrar Sesion</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
