import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/ListaDeFavoritos.css";


export const ListaDeFavoritos = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => { actions.getUserData(); }, [])

    useEffect(() => { actions.getFavorites(); }, [])

    useEffect(() => {
        actions.getCarreras();
    }, []);

    console.log(store.usuario)
    console.log(store.favoritos)
    console.log(store.carreras)



    console.log(store.usuario?.id)

    const handleDeleteFavorite = (favorito_id) => {
        console.log("antes")
        actions.deleteFavorite(favorito_id);
        console.log("antes")
        actions.getFavorites()
        console.log("despues")


    };

    return (
        <div className="row justify-content-center row-cols-1 row-cols-sm-4 bg-dark listaFavoritos">
            {store.favoritos.map((item, index) => {
                const carrera = store.carreras.find(c => c.id === item.id);
                return (
                    <div key={index} className="card m-3 CardSize ">
                        <div>
                            <h5>{item.id}</h5>
                        </div>
                        <div className="card-body bg-dark cardContainer">
                            <h5 className="card-title">{carrera ? carrera.nombre : 'Nombre no encontrado'}</h5>
                            <button onClick={() => handleDeleteFavorite(item.id)} className="btn btn-danger">Borrar de favoritos</button>
                        </div>

                    </div>
                );
            })}
        </div>
    )


}
