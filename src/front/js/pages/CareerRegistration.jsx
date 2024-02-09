import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/CareerRegistration.css";
import { UploadButton } from "../component/uploadButton";


export const RegistroDeCarreras = () => {

    const { store, actions } = useContext(Context)

    const [nombre, setNombre] = useState("");
    const [distancia, setDistancia] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [year, setYear] = useState("");
    const [costo, setCosto] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [dificultad, setDificultad] = useState("");
    const [terminos, setTerminos] = useState("");



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
        image: store.imageUrl,
        terminos: terminos,

    }



    const url = process.env.REACT_ENV_URL

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken")


        fetch(url + "/carrera", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
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
                setDistancia("");
                setCiudad("");
                setPais("");
                setDia("");
                setMes("");
                setYear("");
                setCosto("");
                setCapacidad("");
                setDificultad("");
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
                <div className="ContenedorImagen">
                    <p className="">Subir foto</p>
                    <UploadButton />

                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Nombre de la carrera</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setNombre(e.target.value)}
                        value={nombre} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Distancia</label>
                    <input type="number" className="form-control" id="Name" onChange={(e) => setDistancia(e.target.value)}
                        value={distancia} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setCiudad(e.target.value)}
                        value={ciudad} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">País</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setPais(e.target.value)}
                        value={pais} />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <label htmlFor="Name" className="form-label">Fecha:</label>
                    <div><input type="number" className="form-control" id="Name" placeholder="Dia" min="0" max="31" onChange={(e) => setDia(e.target.value)}
                        value={dia} /></div><p>/</p>
                    <div><input type="number" className="form-control" id="Name" placeholder="mes" min="0" max="12" onChange={(e) => setMes(e.target.value)}
                        value={mes} /></div><p>/</p>
                    <div><input type="number" className="form-control" id="Name" placeholder="año" min="2024" onChange={(e) => setYear(e.target.value)}
                        value={year} /></div><p>/</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Costo</label>
                    <input type="number" className="form-control" id="Name" onChange={(e) => setCosto(e.target.value)}
                        value={costo} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Dificultad</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setDificultad(e.target.value)}
                        value={dificultad} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Capacidad</label>
                    <input type="number" className="form-control" id="Name" onChange={(e) => setCapacidad(e.target.value)}
                        value={capacidad} />
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
