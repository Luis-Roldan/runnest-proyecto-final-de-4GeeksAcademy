import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const Carreras = () => {

    
    //importar el store y actions
    const { store, actions } = useContext(Context)

    //estado para el estilo del alert
    const [ favoriteAlert, setFavoriteAlert ] = useState({display: "none"})
    const [ display, setDisplay ] = useState({display: "none"})
    const [ displayDanger, setDisplayDanger ] = useState({display: "none"})

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
                setDisplay({display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%"})
            }
            if (fetchRace.status !== 201) {
                setDisplayDanger({display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%"})
                return await fetchRace.json()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const postFavorite = async (carrera) => {
        try {
            const token2 = localStorage.getItem("accessToken")
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
                setFavoriteAlert({display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%"})
                actions.getFavorites()
            } 

            if (fetchFavorite.status !== 201) {
                setDisplayDanger({display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%"})
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
            <div style={display} className="alert alert-success w-50 justify-content-between" role="alert">
                Registrado satisfactoriamente.
                <button onClick={() => {setDisplay({display: "none"})}} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div style={displayDanger} className="alert alert-danger w-50 justify-content-between" role="alert">
                <p>Ha ocurrido un error, intenta de nuevo.</p>
                <button onClick={() => {setDisplayDanger({display: "none"})}} type="button" className="btn-close text-end"></button>
            </div>
            <div style={favoriteAlert} className="alert alert-success w-50 justify-content-between" role="alert">
                Favorito guardado
                <button onClick={() => {setFavoriteAlert({display: "none"})}} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-md-4">
                {carreras.map((item, index) => (
                    <div key={index} className="card m-3">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary justify-content-between d-flex">
                                {`${item.pais}, ${item.ciudad}.`}
                                <p className="card-text">{`${item.dia}/${item.mes}/${item.year}`}</p>
                            </h6>
                            <p>{`Capacidad: ${item.capacidad}`}</p>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <p>{`Dificultad: ${item.dificultad}`}</p>
                            <p>{item.costo}$</p>
                        </div>
                        <hr className="hr" />
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <button onClick={() => handleSubscripcion(item.id)} className="btn btn-dark">Registrarme</button>
                            <FontAwesomeIcon
                                className="btn btn-light border-1 border-danger"
                                onClick={() => {postFavorite(item.id)}}
                                icon="fa-solid fa-heart"
                                size="xl" 
                                style={{color: "#ff0000"}}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}