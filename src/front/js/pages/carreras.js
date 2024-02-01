import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";

export const Carreras = () => {
    const { store, actions } = useContext(Context)
    const carreras = store.carreras

    const userType = localStorage.getItem("userType")

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
                    <Link to={userType !== "usuario" ? "/loginUsers" : "/" } className="btn btn-dark">Registrarme</Link>
              </div>
            ))}
        </div>
    )
}