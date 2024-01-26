import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUpForOrganizers.css";


export const SignUpForOrganizers = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [organizacion, setOrganizacion] = useState("")
    const [pagina, setPagina] = useState("")
    const [terminos, setTerminos] = useState("")


    const [formData, setFormData] = useState({
        email: email,
        password: password,
        nombre: nombre,
        telefono: telefono,
        organizacion: organizacion,
        pagina: pagina,
        terminos: terminos,
    });

    const data = {
        email: email,
        password: password,
        nombre: nombre,
        telefono: telefono,
        organizacion: organizacion,
        pagina: pagina,
        terminos: terminos,
    }

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: type === "checkbox" ? checked : value,
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://fictional-enigma-6qv7vr5w9g4c5j4-3001.app.github.dev/api/organizador", {
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
                setTerminos("")

            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });
        e.target.value = "";
    };

    return (
        <div className="SignUpForOrganizersContainer">
            <h1 className="TitleSignUpForOrganizers">
                Registro para organizadores
            </h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setNombre(e.target.value)}
                        value={nombre} name="name" />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" onChange={handleChange}
                        value={formData.apellido} />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" name="email" onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <div id="emailHelp" className="form-text">Nostros nunca compartiremos tu correo con nadie</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" onChange={(e) => setTelefono(e.target.value)}
                        value={telefono} />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationName" className="form-label">Nombre de la organización</label>
                    <input type="text" className="form-control" id="OrganizationName" onChange={(e) => setOrganizacion(e.target.value)}
                        value={organizacion} />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationsWeb" className="form-label">Página Web o red social de la organización</label>
                    <input type="text" className="form-control" id="OrganizationsWeb" onChange={(e) => setPagina(e.target.value)}
                        value={pagina} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="mb-3 form-check CheckBoxContainer">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" onChange={(e) => setTerminos(e.target.value)}
                        value={terminos} />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto términos y condiciones</label>
                </div>
                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
};
