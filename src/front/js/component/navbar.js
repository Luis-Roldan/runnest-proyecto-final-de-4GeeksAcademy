import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/runestLogo.png";
import profile from "../../img/profile.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container mb-3 mt-3">
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Link to="/" className="otherPages">
            <span>Carreras</span>
          </Link>
        </div>
        <div>
          <Link to="/" className="otherPages">
            <span>Favoritos</span>
          </Link>
        </div>
        <div>
          <Link to="/" className="otherPages">
            <span>Contacto</span>
          </Link>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Iniciar sesión
          </button>
          <ul class="dropdown-menu">
            <li><Link to="/logIn" className="btn btnNav">
              para usuarios
            </Link></li>
            <li><Link to="/logIn" className="btn btnNav">
              para organizadores
            </Link></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registrarse
          </button>
          <ul class="dropdown-menu">
            <li><Link to="/signUp" className="btn btnNav">
              para usuarios
            </Link></li>
            <li><Link to="/signUpForOrganizers" className="btn btnNav">
              para organizadores
            </Link></li>
          </ul>
        </div>
        {/* <div>
          <Link to="/logIn" className="btn btnNav">
            iniciar sesión
          </Link>
        </div>
        <div>
          <Link to="/signUp" className="btn btnNav">
            Registrarse
          </Link>
        </div> */}
        <div>
          <Link to="/">
            <img src={profile} className="profileImg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
