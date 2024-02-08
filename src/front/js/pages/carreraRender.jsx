import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";


export const CarreraRender = () => {
 const {id} = useParams();

    return (
        <div>
            Carrera rend
        </div>
    )
}