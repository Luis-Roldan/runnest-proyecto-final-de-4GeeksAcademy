import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/runestLogo.png";
import "../../styles/navbar.css";
import "../../styles/burgerMenu.css"
import { BurgerMenu } from "./burgerMenu";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const isLoggedIn = store.isLoggedIn

  const handleMenuForNonUsers = () => {
    if (isLoggedIn) {
      return(
        <div className="burger-menu me-3">
           <BurgerMenu />
        </div>
      )
    } else {
      return (
        <button
          className="navbar-toggler border-2 border-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" style={{ color: "#000000", }} />
        </button>
      )
    }
  }

  const handleLogInButton = () => {
    if (isLoggedIn) {
      return
    } else {
      return (
        <div>
          <li className="nav-item dropdown">
            <a 
              className="nav-link 
              dropdown-toggle" href="#" 
              role="button" 
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Iniciar sesion
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/loginUsers">Usuarios</Link></li>
              <li><Link className="dropdown-item" to="/LoginForOrganizers">Organizadores</Link></li>
            </ul>
          </li>
        </div>
      )
    }
  }

  const handleSignUpButton = () => {
    if (isLoggedIn) {
      return
    } else {
      return (
        <div>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="#" role="button" 
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Registrarse
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/signUpUsers">Usuarios</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signUpForOrganizers">Organizadores</Link>
              </li>
            </ul>
          </li>
        </div>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="img-fluid" src={logo} />
        </Link>
        {handleMenuForNonUsers()}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link" to="/carreras">Carreras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            {handleLogInButton()}
            {handleSignUpButton()}
          </ul>
        </div>
      </div>
    </nav>
  );
};
