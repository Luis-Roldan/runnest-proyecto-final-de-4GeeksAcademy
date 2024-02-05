import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const AgregarResultados = () => {

    return (
        <div>
            <h1>Nombre de la carrera</h1>
            <h2>Distancia</h2>
            <h2>Lugar</h2>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>22</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Otto</td>
                        <td>@fat</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">3</th>
                        <td colSpan="4">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>)
}