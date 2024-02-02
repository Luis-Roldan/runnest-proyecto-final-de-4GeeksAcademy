import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/runestLogo.png";
import "../../styles/navbar.css";
import "../../styles/burgerMenu.css"
import { BurgerMenu } from "./burgerMenu";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const isLoggedIn = store.isLoggedIn

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container mb-3 mt-3">
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Link to="/carreras" className="otherPages">
            <span>Carreras</span>
          </Link>
        </div>
        <div>
          <Link to="/contacto" className="otherPages">
            <span>Contacto</span>
          </Link>
        </div>
        <div>
          <Link to="/puntuacion" className="otherPages">
            <span>puntuacion</span>
          </Link>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle btnNav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Iniciar sesión
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/LoginUsers" className="btn ScrollDownButtonNav">
              para usuarios
            </Link></li>
            <li><Link to="/logInForOrganizers" className="btn ScrollDownButtonNav">
              para organizadores
            </Link></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle btnNav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registrarse
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/SignUpUsers" className="btn ScrollDownButtonNav">
              para usuarios
            </Link></li>
            <li><Link to="/signUpForOrganizers" className="btn ScrollDownButtonNav">
              para organizadores
            </Link></li>
          </ul>
        </div>
        <div className="burger-menu">
          {isLoggedIn ? <BurgerMenu /> : null}
        </div>
      </div>
    </nav>
  );
};
