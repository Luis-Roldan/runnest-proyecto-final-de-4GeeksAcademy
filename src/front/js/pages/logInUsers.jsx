import React, { useState, useEffect, useContext } from "react";
import "../../styles/logInUser.css"

export const LoginUsers = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "https://reimagined-space-spoon-qpjvjgqr7x936569-3001.app.github.dev/api/token"

    const data = {
        "email": email,
        "password": password,
    }

    console.log(email)
    console.log(password)


    const handleLogIn = async (requestData) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const token = await response.json()
            if (response.status == 201) {
                sessionStorage.setItem("accessToken", token)
            }

            if (response.status !== 201) {
                const respuestaDelBackend = await response.json()
                return respuestaDelBackend
            }
            return token
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogIn(data);
        setEmail("");
        setPassword("")
    }



    return (

        <div className="d-flex p-5 justify-content-center align-items-center">
            <form
                onSubmit={handleSubmit}
                className="shadow p-5"
            >
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
            <div className="w-50 shadow p-5 side-div text-center d-flex flex-column justify-content-evenly">
                <div>
                    <h3>Bienvenido a Runnest</h3>
                    <h6>inicia sesión para continuar</h6>
                </div>
                <div>
                    <h3 className="pt-5">No tienes cuenta?</h3>
                    <button type="submit" className="btn btn-light">Regístrate</button>
                </div>
            </div>
        </div>
    )
};