import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { AlertSuccess } from "../component/alertSuccess";
import { AlertDanger } from "../component/alertDanger";
import "../../styles/carreras.css"

export const Carreras = () => {


    //importar el store y actions
    const { store, actions } = useContext(Context)

    //estado para el estilo del alert
    const [favoriteAlert, setFavoriteAlert] = useState({ display: "none" })
    const [display, setDisplay] = useState({ display: "none" })
    const [displayDanger, setDisplayDanger] = useState({ display: "none" })
    const [error, setError] = useState("")
    const [favoriteError, setFavoriteError] = useState("")

    //url de la api
    const url = process.env.REACT_ENV_URL

    //declarar el useNavigate
    const navigate = useNavigate()

    //obtener todas las carreras desde el store
    const carreras = store.carreras


    //obtener el tipo de usuario desde el local storage
    const userType = localStorage.getItem("userType")

    //funcion para hacer el post de una nueva subscripcion
    const subToRace = async (carrera_id) => {
        try {
            const token = localStorage.getItem("accessToken")
            const fetchRace = await fetch(url + "/carrera_usuario", {
                method: "POST",
                body: JSON.stringify({
                    carrera_id: carrera_id
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            if (fetchRace.status == 201) {
                setDisplay({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
            }
            if (fetchRace.status !== 201) {
                const fetchRaceToJson = await fetchRace.json()
                setError(fetchRaceToJson.msg)
                setDisplayDanger({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    const postFavorite = async (carrera, carrera_id) => {
        if (userType == "usuario") {

        } else {
            navigate("/loginUsers")
        }

        try {
            const token2 = localStorage.getItem("accessToken")
            console.log(token2)
            const fetchFavorite = await fetch(url + "/favorito", {
                method: "POST",
                body: JSON.stringify({
                    carrera: carrera
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token2
                }
            });
            const fetchFavoriteToJson = await fetchFavorite.json();
            if (fetchFavorite.status == 201) {
                setFavoriteAlert({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
                actions.getFavorites()
            }

            if (fetchFavorite.status !== 201) {
                setError(fetchFavoriteToJson.msg)
                setDisplayDanger({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
            }
        } catch (error) {
            console.log(error)
        }
    }


    //metodo post para subscribirse a una carrera
    const handleSubscripcion = (carrera_id) => {
        if (userType == "usuario") {
            subToRace(carrera_id)
        } else {
            navigate("/loginUsers")
        }
    }


    return (
        <div className="">
            <AlertSuccess message="Registrado satisfactoriamente." estilo={display} funcion={() => { setDisplay({ display: "none" }) }} />
            <AlertDanger estilo={displayDanger} message={error} funcion={() => { setDisplayDanger({ display: "none" }) }} />
            <AlertSuccess estilo={favoriteAlert} message="Favorito guardado" funcion={() => { setFavoriteAlert({ display: "none" }) }} />

            <div className="row justify-content-center row-cols-1 row-cols-sm-4">
                {carreras.map((item, index) => (
                    <div key={index} className="card m-3 CardSize">
                        <img src={item.image} className="card-img-top ImageStyle" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary justify-content-between d-flex">
                                {`${item.pais}, ${item.ciudad}.`}
                                <p className="card-text">{`${item.dia}/${item.mes}/${item.year}`}</p>
                            </h6>
                            <p>{`Capacidad: ${item.capacidad}`}</p>
                            <div className="d-flex justify-content-between">
                                <p>{`Dificultad: ${item.dificultad}`}</p>
                                <p>{item.costo}$</p>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="d-flex justify-content-between align-items-center px-3 mb-2">
                            <button onClick={() => handleSubscripcion(item.id)} className="btn btn-dark">Registrarme</button>
                            <FontAwesomeIcon
                                className="btn btn-light border-1 border-danger heart"
                                onClick={() => { postFavorite(item.id) }}
                                icon="fa-regular fa-heart"
                                size="xl"

                            />
                        </div>




                        <Link to={userType === "usuario" ? `/carreraRender/${item.id}` : "/loginUsers"} style={{ textDecoration: 'none' }} onClick={() => handleClick(item.id)}>Califica esta carrera!</Link>

                        <Link to={`/VerResultados/${item.id}`} className="panel-item ps-3 py-2 " >
                            <FontAwesomeIcon className="me-2" icon="a-solid fa-chart-simple" />
                            <span>Ver Resultados</span>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}


//de fa-regular a fa-solid on click

