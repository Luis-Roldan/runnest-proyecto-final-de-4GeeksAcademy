import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/CareerRegistration.css";


export const RegistroDeCarreras = () => {

    const [nombre, setNombre] = useState("")
    const [distancia, setDistancia] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [year, setYear] = useState("")
    const [costo, setCosto] = useState("")
    const [capacidad, setCapacidad] = useState("")
    const [dificultad, setDificultad] = useState("")
    const [terminos, setTerminos] = useState("");
    // const [isChecked, setIsChecked] = useState("");


    const [formData, setFormData] = useState({
        nombre: nombre,
        distancia: distancia,
        ciudad: ciudad,
        pais: pais,
        dia: dia,
        mes: mes,
        year: year,
        costo: costo,
        capacidad: capacidad,
        dificultad: dificultad,
        terminos: terminos,
    });

    const data = {
        nombre: nombre,
        distancia: distancia,
        ciudad: ciudad,
        pais: pais,
        dia: dia,
        mes: mes,
        year: year,
        costo: costo,
        capacidad: capacidad,
        dificultad: dificultad,
        terminos: terminos,
    }

    const url = process.env.REACT_ENV_URL
    console.log(url)

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(url + "/organizador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setNombre("");
                setEmail("");
                setTelefono("");
                setOrganizacion("");
                setPagina("");
                setPassword("");
                setTerminos(false);


            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });

    };

    return (
        <div className="CareerRegistrationContainer">
            <h1 className="TitleSignUpForCareerRegistration">
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
                    <input type="checkbox" className="form-check-input" id="exampleCheck" onChange={(e) => setTerminos(true)}
                        value={terminos} />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto términos y condiciones</label>
                </div>

                <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
};
