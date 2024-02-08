import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";


export const CarreraRender = () => {
 const {id} = useParams();
 const {store,actions} = useContext(Context);
const carrera= store

    return (
        <div>
            
        </div>
    )
}