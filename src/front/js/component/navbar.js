import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/runestLogo.png";
import profile from "../../img/profile.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
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
        <div>
          <Link to="/">
            <button>iniciar sesión</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button>Registrarse</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={profile} className="profileImg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
