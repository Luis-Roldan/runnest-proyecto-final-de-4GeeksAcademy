import React, { useState, useEffect, useContext } from "react";
import "../../styles/logInUser.css"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { AlertSuccess } from "../component/alertSuccess";
import { AlertDanger } from "../component/alertDanger";


export const LoginUsers = () => {

    //estados para tener imputs controlados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //url para hacer la solicitud
    const url = process.env.REACT_ENV_URL
    const { store, actions } = useContext(Context);

    //variable para declarar el useNavigate
    const navigate = useNavigate()

    //estados para los estilos de los alerts
    const [display, setDisplay] = useState({ display: "none" })
    const [displayDanger, setDisplayDanger] = useState({ display: "none" })
    const [errorMsg, setErrorMsg] = useState("")


    //objeto para enviar como prop a la funcion handleLogIn
    const data = {
        "email": email,
        "password": password,
    }



    const handleLogIn = async (requestData) => {
        try {
            const response = await fetch(url + "/token", {
                method: "POST",
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const token = await response.json()
            if (response.status == 201) {
                //guardar el token y el tipo de usuario en el session storage
                localStorage.setItem("accessToken", token);
                localStorage.setItem("userType", "usuario");
                actions.setIsLoggedIn();
                actions.setUserTypeToUsuario();
                actions.getFavorites();
                setDisplay({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
                setTimeout(() => { setDisplay({ display: "none" }) }, 3500)
                setTimeout(() => { navigate("/carreras") }, 3500)

            } else {
                setErrorMsg(token.msg)
                setDisplayDanger({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
                return
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
        setPassword("");
    }



    return (
        <div className="d-flex p-5 justify-content-center align-items-center">
            <AlertSuccess message="Bienvenido a Runnest. Seras redirigido a la vista de carreras" funcion={() => { setDisplay({ display: "none" }) }} estilo={display} />
            <AlertDanger message={errorMsg} estilo={displayDanger} funcion={() => { setDisplayDanger({ display: "none" }) }} />
            <form
                onSubmit={handleSubmit}
                className="shadow p-5 logInForm"
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
                    <h6>inicia sesión de usuario para continuar</h6>
                </div>
                <div>
                    <h3 className="pt-5">No tienes cuenta?</h3>
                    <button type="submit" className="btn btn-light">Regístrate</button>
                </div>
            </div>
        </div>
    )
};