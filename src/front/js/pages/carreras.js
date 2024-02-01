import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Carreras = () => {
    const { store, actions } = useContext(Context)
    const carreras = store.carreras
    return(
        <div>
            {}
        </div>
    )
}