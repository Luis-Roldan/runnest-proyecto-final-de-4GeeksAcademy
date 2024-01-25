import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUpForOrganizers.css";


export const SignUpForOrganizers = () => {

    const [formData, setFormData] = useState({
        email: "correo@com",
        password: "asdasdsa",
        nombre: "asdasdsad",
        telefono: 15215,
        organizacion: "saDASDASD",
        pagina: "dsadsad",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://fictional-enigma-6qv7vr5w9g4c5j4-3001.app.github.dev/api/organizador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });
    };

    return (
        <div className="SignUpForOrganizersContainer">
            <h1 className="TitleSignUpForOrganizers">
                Registro para organizadores
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="Name" onChange={handleChange}
                        value={formData.nombre} />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" onChange={handleChange}
                        value={formData.apellido} />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={handleChange}
                        value={formData.email} />
                    <div id="emailHelp" className="form-text">Nostros nunca compartiremos tu correo con nadie</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" onChange={handleChange}
                        value={formData.telefono} />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationName" className="form-label">Nombre de la organización</label>
                    <input type="text" className="form-control" id="OrganizationName" onChange={handleChange}
                        value={formData.organizacion} />
                </div>
                <div className="mb-3">
                    <label htmlFor="OrganizationsWeb" className="form-label">Página Web o red social de la organización</label>
                    <input type="text" className="form-control" id="OrganizationsWeb" onChange={handleChange}
                        value={formData.pagina_web} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={handleChange}
                        value={formData.hashed_password} />
                </div>
                <div className="mb-3 form-check CheckBoxContainer">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto términos y condiciones</label>
                </div>
                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
};
