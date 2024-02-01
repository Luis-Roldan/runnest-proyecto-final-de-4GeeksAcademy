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
                    <label htmlFor="Name" className="form-label">Nombre de la carrera</label>
                    <input type="text" className="form-control" id="Name" onChange />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Distancia</label>
                    <input type="text" className="form-control" id="Name" onChange />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">País</label>
                    <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <label htmlFor="Name" className="form-label">Fecha:</label>
                    <div><input type="number" className="form-control" id="Name" placeholder="Dia" min="0" max="31" /></div><p>/</p>
                    <div><input type="number" className="form-control" id="Name" placeholder="mes" min="0" max="12" /></div><p>/</p>
                    <div><input type="number" className="form-control" id="Name" placeholder="año" min="2024" /></div><p>/</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Costo</label>
                    <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Dificultad</label>
                    <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Capacidad</label>
                    <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3 form-check CheckBoxContainer">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto términos y condiciones</label>
                </div>

                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp">Enviar</button>
            </form>
        </div>
    );
};
