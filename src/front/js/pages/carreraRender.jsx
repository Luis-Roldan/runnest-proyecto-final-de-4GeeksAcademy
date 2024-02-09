import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/carreraRender.css"


export const CarreraRender = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const carrera = store.carreras[id];

    return (

        <div className="container">
            <span><h1>Maraton Medellin 21 y 42k </h1></span>
            <div className="imagen">
                <div className="carrera">

                    <ul>
                        <li>Nombre: {carrera.nombre}</li>
                        <li>Distancia: {carrera.distancia}</li>
                        <li>País: {carrera.pais}</li>
                        <li>Ciudad: {carrera.ciudad}</li>
                        <li>Día: {carrera.dia}</li>
                        <li>Mes: {carrera.mes}</li>
                        <li>Año: {carrera.year}</li>
                        <li>Costo: {carrera.costo}</li>
                        <li>Dificultad: {carrera.dificultad}</li>
                        <li>Capacidad: {carrera.capacidad}</li>
                        <li>Organizador ID: {carrera.organizador_id}</li>
                        <li>Términos: {carrera.terminos}</li>
                    </ul>

                </div>
            </div>

 


        </div>

    )
}