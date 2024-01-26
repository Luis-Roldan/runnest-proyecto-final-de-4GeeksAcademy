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
