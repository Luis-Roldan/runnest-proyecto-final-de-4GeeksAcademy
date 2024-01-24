import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUpForOrganizers.css";

export const SignUpForOrganizers = () => {


    return (
        <div className="SignUpForOrganizersContainer">
            <h1 className="TitleSignUpForOrganizers">
                Registro para organizadores
            </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationName" className="form-label">Nombre de la organización</label>
                    <input type="text" className="form-control" id="OrganizationName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationsWeb" className="form-label">Página Web o red social de la organización</label>
                    <input type="text" className="form-control" id="OrganizationsWeb" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <div className="mb-3 form-check CheckBoxContainer">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto terminos y condiciones</label>
                </div>
                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp">Submit</button>
            </form>
        </div>
    );
};
