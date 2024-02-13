import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/carreraRender.css"
import { Puntuacion } from "../pages/puntuacion.jsx"

export const CarreraRender = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const carrera = store.carreras[id];

    return (

        <div className="container">
            <span><h1 className="NombreDeCarrera">{carrera.nombre} </h1></span>
            <Puntuacion />



        </div>

    )
}