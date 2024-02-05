import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const AgregarResultados = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => { actions.getCarreras(); }, [])

    // funcion para repetir el Tbody cierta cantidad de veces //
    const ListaDeParticipantes = Array.from({ length: 100 }, (_, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td className="Participante">
                <input type="text" placeholder="nombre" className="inputParticipante" />
            </td>
            <td className="Edad">
                <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" />
            </td>
            <td className="Time">
                <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" />
                <span>:</span>
                <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" />
                <span>:</span>
                <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" />
            </td>
        </tr>
    ));


    return (
        <div>
            <div className="DatosDeLaCarrera">
                <h1>{`Nombre de la carrera: ${store.carreras[0]?.nombre}`}</h1>
                <h2>{`Distancia: ${store.carreras[0]?.distancia}`}</h2>
                <h2>{`Lugar: ${store.carreras[0]?.ciudad}`}</h2>
            </div>
            <table className="table ">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Participante</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Tiempo</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaDeParticipantes}
                </tbody>
                {/* <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="Participante">
                            <input type="text" placeholder="nombre" className="inputParticipante" />
                        </td>
                        <td className="Edad">
                            <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" />
                        </td>
                        <td className="Time">
                            <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" />
                            <span>:</span>
                            <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" />
                            <span>:</span>
                            <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" />
                        </td>
                    </tr>
                </tbody> */}
            </table>
        </div>)
}