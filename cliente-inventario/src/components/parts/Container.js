import React, { Fragment, useContext } from "react";
//Importamos el CONTAINER
import Navigation from "../navigation/Navigation";
//Importmos el Browser Router
import { BrowserRouter } from "react-router-dom";
//Importamos los ITEMS
import Navbar from "../items/Navbar";
import Footer from "../items/Footer";
//Importamos el USECONTEXT
import inventarioContext from "../../context/inventarioContext";
//Importmos el LOGIN PRINCIPAL
import Login from "../parts/Login";

const Container = () => {
  const { login } = useContext(inventarioContext);

  return (
    <Fragment>
      {login ? (
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <Navigation />
          </main>
          <Footer />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </Fragment>
  );
};

export default Container;
