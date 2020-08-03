import React, { Fragment, useState } from "react";
//Extraer datos del formulario de LOGIN
const Login = () => {
  const [datosLogin, guardarDatosLogin] = useState({
    usuario: "",
    password: "",
  });

  const onChangeLogin = (e) => {
    guardarDatosLogin({
      ...datosLogin,
      [e.target.name]: e.target.value,
    });
  };

  const { usuario, password } = datosLogin;

  const onSubmitLogin = (e) => {
    e.preventDefault();

    console.log("hola mundo");
  };

  return (
    <Fragment>
      <div className="contenedor-login container">
        <div>
          <h4>Ingrese su usuario</h4>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="usuario"
                  type="text"
                  name="usuario"
                  onChange={onChangeLogin}
                />
                <label htmlFor="usuario">usuario</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">https</i>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChangeLogin}
                />
                <label htmlFor="password">password</label>
              </div>
              <div className="col s12">
                <button
                  className="col s12 waves-effect waves-light btn"
                  onClick={onSubmitLogin}
                >
                  INGRESAR
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
