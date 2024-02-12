import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/VerResultados.css"
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from 'react-dom'

export const VerResultados = () => {


    const { id } = useParams();

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCarreras();
        actions.getResultados();
    }, []);


    const resultados = store.resultados.filter(resultados => resultados.carrera_id === parseInt(id));


    console.log(resultados)
    console.log(store.resultados)
    console.log(store.carreras)
    console.log(parseInt(id))


    const carrera = store.carreras.find(carrera => carrera.id === parseInt(id));


    return (
        <div>
            <div className="DatosDeLaCarrera">
                <h1 className="TituloPrincipal">{`Nombre de la carrera: ${carrera?.nombre}`}</h1>
                <h2 className="Titulo">{`Distancia: ${carrera?.distancia}`}</h2>
                <h2 className="Titulo">{`Lugar: ${carrera?.ciudad}`}</h2>
            </div>
            <form className="ContenedorTabla">
                {resultados.length > 0 ? (
                    <table className="table table-dark table-striped ">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Puesto</th>
                                <th scope="col">Participante</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Horas</th>
                                <th scope="col">Minutos</th>
                                <th scope="col">Segundos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map((resultados, index) => (
                                <tr key={index}>
                                    <td className="Puesto">
                                        {resultados.puesto}
                                    </td>
                                    <td className="Participante">
                                        {resultados.participante}
                                    </td>
                                    <td className="Edad">
                                        {resultados.edad}
                                    </td>
                                    <td className="Horas">
                                        <span>{resultados.horas}</span>
                                    </td>
                                    <td className="Minutos">
                                        <span>{resultados.minutos}</span>
                                    </td>
                                    <td className="Segundos">

                                        <span>{resultados.segundos}</span>
                                    </td>

                                </tr>
                            ))}


                        </tbody>
                    </table>
                ) : (
                    <p className="MensajeNoHayResultados">No hay resultados disponibles aún</p>
                )}
            </form>
        </div>
    )
}