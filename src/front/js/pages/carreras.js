import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Carreras = () => {
    //importar el store y actions
    const { store, actions } = useContext(Context)

    //estado para el estilo del alert
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
                setDisplay({display: "flex"})
            }
            if (fetchRace.status !== 201) {
                setDisplayDanger({display: "flex"})
                return await fetchRace.json()
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
            <div style={display} className="mx-auto alert alert-success w-50 justify-content-between" role="alert">
                Registrado satisfactoriamente.
                <button onClick={() => {setDisplay({display: "none"})}} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div style={displayDanger} className="mx-auto alert alert-danger w-50 justify-content-between" role="alert">
                <p>Ha ocurrido un error, intenta de nuevo.</p>
                <button onClick={() => {setDisplayDanger({display: "none"})}} type="button" className="btn-close text-end"></button>
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
                        <button onClick={() => handleSubscripcion(item.id)} className="btn btn-dark m-2">Registrarme</button>
                    </div>
                ))}
            </div>
        </div>
    )
}