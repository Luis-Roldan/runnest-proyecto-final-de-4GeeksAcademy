import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/perfil.css"


export const PerfilUsuario = () => {
    const [isClicked, setIsclicked] = useState("favoritos")
    const { store, actions } = useContext(Context)

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => { actions.getUserData(); }, [])

    //funcion para renderizar en base al boton que se le hace click
    const handleConditionalRendering = () => {
        if (isClicked == "favoritos") {
            return (
                <div><Link to="/ListaDeFavoritos" className="panel-item ps-3 py-2 " >
                    <span>Ver Lista de Favoritos</span>
                </Link></div>

            )
        } else if (isClicked == "carreras") {
            return "carreras"
        } else if (isClicked == "reviews") {
            return "Reseñas"
        } else if (isClicked == "resultados") {
            return "resultados"
        }
    }


    return (
        <div>
            <section className="TopProfilePartContainer">
                <div className="LeftSideProfileTop">
                    <img src="https://rajueditor.com/wp-content/uploads/2023/09/fotos-de-perfil-aesthetic.jpg" className="ImgProfile"></img>
                    <h1 className="text-center pt-4 TitleRight">{`Bienvenido, ${store.usuario.nombre} ${store.usuario.apellido} a la meca de las carreras`}</h1>
                </div>
                <div className="RightSideProfileTop">
                    <h2 className="Title">tus datos personales de usuario son:</h2>
                    <h3 className="text-center pt-4">{`Correo: ${store.usuario.email}`}</h3>
                    <h3 className="text-center pt-4">{`Telefono: ${store.usuario.telefono}`}</h3>
                    <h3 className="text-center pt-4">{`Direccion: ${store.usuario.direccion}`}</h3>
                </div>
            </section>
            <div className="d-flex justify-content-center pt-4">
                <button onClick={() => { setIsclicked("favoritos") }} className="btn-perfil">Favoritos</button>
                <button onClick={() => { setIsclicked("carreras") }} className="btn-perfil">Mis carreras</button>
                <button onClick={() => { setIsclicked("reviews") }} className="btn-perfil">Reseñas</button>
                <button onClick={() => { setIsclicked("resultados") }} className="btn-perfil">Resultados</button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                {handleConditionalRendering()}
            </div>
        </div>
    )
}