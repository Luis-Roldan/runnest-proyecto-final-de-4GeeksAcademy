import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Carreras = () => {
    //importar el store y actions
    const { store, actions } = useContext(Context)

    //declarar el useNavigate
    const navigate = useNavigate()

    //obtener todas las carreras desde el store
    const carreras = store.carreras

    //obtener el tipo de usuario desde el local storage
    const userType = localStorage.getItem("userType")

    //metodo post para subscribirse a una carrera
    const handleSubscripcion = (carrera_id) => {
        if (userType == "usuario") {
            actions.subToRace(carrera_id)
        } else {
            navigate("/loginUsers")
        }
    }

    return(
        <div className="row row-cols-1 row-cols-md-4">
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
    )
}