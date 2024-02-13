import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/ListaDeFavoritos.css";


export const ListaDeFavoritos = () => {

    const { store, actions } = useContext(Context);

    const [isClicked, setIsclicked] = useState("favoritos")

    useEffect(() => {
        actions.getFavorites();
    }, []);

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => { actions.getOrganizadorData(); }, [])



    //obtener todas las carreras desde el store
    const carrera = store.carreras.filter(c => c.organizador === store.organizador?.id)

    return (
        <div>
            <h1>Holaaaaa</h1>
        </div>
    )


}
