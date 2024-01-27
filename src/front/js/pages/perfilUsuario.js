import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";


export const PerfilUsuario = () => {
    const token = sessionStorage.getItem("accessToken")
    const [ isClicked, setIsclicked ] = useState("")
    const { store, actions } = useContext(Context)

    useEffect(() => {actions.getUserData();} , [])
    
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
                <button onClick={()=> {setIsclicked("favoritos")}} className="m-4">Favoritos</button>
                <button onClick={()=> {setIsclicked("carreras")}} className="m-4">Mis carreras</button>
                <button onClick={()=> {setIsclicked("reviews")}} className="m-4">Reseñas</button>
                <button onClick={()=> {setIsclicked("resultados")}} className="m-4">Resultados</button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                {handleConditionalRendering()}
            </div>
        </div>
    )
}