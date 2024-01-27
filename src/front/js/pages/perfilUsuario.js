import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css"


export const PerfilUsuario = () => {
    const [ isClicked, setIsclicked ] = useState("favoritos")
    const { store, actions } = useContext(Context)

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => {actions.getUserData();} , [])
    
    //funcion para renderizar en base al boton que se le hace click
    const handleConditionalRendering = () => {
        if (isClicked == "favoritos") {
            return "favoritos"
        } else if (isClicked == "carreras") {
            return "carreras"
        } else if (isClicked == "reviews") {
            return "Reseñas"
        } else if (isClicked == "resultados") {
            return "resultados"
        }
    }
    

    return(
        <div>
            <h1 className="text-center pt-4">{`Bienvenido, ${store.usuario.nombre}`}</h1>
            <div className="d-flex justify-content-center pt-4">
                <button onClick={()=> {setIsclicked("favoritos")}} className="btn-perfil">Favoritos</button>
                <button onClick={()=> {setIsclicked("carreras")}} className="btn-perfil">Mis carreras</button>
                <button onClick={()=> {setIsclicked("reviews")}} className="btn-perfil">Reseñas</button>
                <button onClick={()=> {setIsclicked("resultados")}} className="btn-perfil">Resultados</button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                {handleConditionalRendering()}
            </div>
        </div>
    )
}