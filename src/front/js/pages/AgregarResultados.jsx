import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const AgregarResultados = () => {


    const [participante, setParticipante] = useState("")
    const [edad, setEdad] = useState("")
    const [horas, setHoras] = useState("")
    const [minutos, setMinutos] = useState("")
    const [Segundos, setSegundos] = useState("")
    


    const data = {
        participante: participante,
        edad: edad,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
    }


    const { store, actions } = useContext(Context)

    useEffect(() => { actions.getCarreras(); }, [])

    const url = process.env.REACT_ENV_URL

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken")


        fetch(url + "/resultados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);

                setNombre("");
                setDistancia("");
                setCiudad("");
                setPais("");
                setDia("");
                setMes("");
                setYear("");
                setCosto("");
                setCapacidad("");
                setDificultad("");
                setTerminos(false);
                setOrganizadorId("");


            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });

    };

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
                    <tr>
                        <th scope="row">1</th>
                        <td className="Participante">
                            {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
                            <select aria-label="Default select example" className="form-select inputParticipante" defaultValue="">
                                <option value="">Lista de Participantes</option>
                                <option value="1">Participante 1</option>
                                <option value="2">Participante 2</option>
                                <option value="3">Participante 3</option>
                            </select>
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
                    <tr>
                        <th scope="row">2</th>
                        <td className="Participante">
                            {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
                            <select aria-label="Default select example" className="form-select inputParticipante" defaultValue="">
                                <option value="">Lista de Participantes</option>
                                <option value="1">Participante 1</option>
                                <option value="2">Participante 2</option>
                                <option value="3">Participante 3</option>
                            </select>
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
                    <tr>
                        <th scope="row">3</th>
                        <td className="Participante">
                            {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
                            <select aria-label="Default select example" className="form-select inputParticipante" defaultValue="">
                                <option value="">Lista de Participantes</option>
                                <option value="1">Participante 1</option>
                                <option value="2">Participante 2</option>
                                <option value="3">Participante 3</option>
                            </select>
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
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration" onClick={handleSubmit}>Enviar</button>
        </div>)
}