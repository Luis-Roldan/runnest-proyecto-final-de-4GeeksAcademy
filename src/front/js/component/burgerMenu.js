import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
    const { store, actions } = useContext(Context)
    const userType = store.userType

    //ejecutar la funcion setIsLoggedOut para actualizar el isLoggedIn en el store
    //borrar el role y el token de el session storage
    const handleLogOut = () => {
        actions.setIsLoggedOut()
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userType")
    }
    //

    return (
        <div>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li>{userType == "usuario" ? <Link className="menu__item" to="/perfil">Perfil</Link> : <Link className="menu__item" to="/perfilOrganizador">Perfil</Link>}</li>
                <li><Link className="menu__item" to="/carreras">Carreras</Link></li>
                <li><Link className="menu__item" to="/contacto">Contacto</Link></li>
                <li><Link className="menu__item" to="/AboutUs">About Us</Link></li>
                <li><Link className="menu__item" onClick={handleLogOut} to="/">Log out</Link></li>
            </ul>
        </div>
    )
}