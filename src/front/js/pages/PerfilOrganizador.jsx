import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css"


export const PerfilOrganizador = () => {
    const [isClicked, setIsclicked] = useState("favoritos")
    const { store, actions } = useContext(Context)

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => { actions.getOrganizadorData(); }, [])

    //funcion para renderizar en base al boton que se le hace click
    const handleConditionalRendering = () => {
        if (isClicked == "favoritos") {
            return (
                <div>Favoritos</div>
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
                    <h1 className="text-center pt-4">{`Bienvenido, ${store.organizador.nombre} ${store.usuario.apellido} a la meca de las carreras`}</h1>
                </div>
                <div className="RightSideProfileTop">
                    <h2 className="Title">tus datos personales de organizador son:</h2>
                    <h3 className="text-center pt-4">{`Correo: ${store.organizador.email}`}</h3>
                    <h3 className="text-center pt-4">{`Telefono: ${store.organizador.telefono}`}</h3>
                    <h3 className="text-center pt-4">{`Organizacion: ${store.organizador.organizacion}`}</h3>
                    <h3 className="text-center pt-4">{`Pagina web: ${store.organizador.pagina_web}`}</h3>
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