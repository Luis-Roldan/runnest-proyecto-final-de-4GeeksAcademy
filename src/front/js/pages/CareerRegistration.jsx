import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUpForOrganizers.css";


export const RegistroDeCarreras = () => {


    return (
        <div className="SignUpForOrganizersContainer">
            <h1 className="TitleSignUpForOrganizers">
                Registrar una nueva carrera
            </h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="Name" onChange />
                </div>

                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp">Enviar</button>
            </form>
        </div>
    );
};
