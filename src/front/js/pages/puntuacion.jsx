import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Puntuacion = () => {
    const [selectedColor, setSelectedColor] = useState("yellow");

    const Puntuacion = async (requestData) => {
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
                actions.setSelectedColor();
                actions.setUserTypeToUsuario();
            }

            if (response.status !== 201) {
                const respuestaDelBackend = await response.json();
                return respuestaDelBackend
            }
            return token
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Puntuacion(data);
        setSelectedColor("");
    }
    return <div >

        <div className="trafficTop"></div>
        <form onSubmit={handleSubmit}
                className="shadow p-5 logInForm"
            >
        <div className="traffic-light">
        <div onClick={() => setSelectedColor("yellow")}className={"light yellow"+(selectedColor === "yellow" ? "glow" : "" )}></div>
        <div onClick={() => setSelectedColor("yellow")}className={"light yellow"+(selectedColor === "yellow" ? "glow" : "" )}></div>
        <div onClick={() => setSelectedColor("yellow")}className={"light yellow"+(selectedColor === "yellow" ? "glow" : "" )}></div>
        <div onClick={() => setSelectedColor("yellow")}className={"light yellow"+(selectedColor === "yellow" ? "glow" : "" )}></div>
        <div onClick={() => setSelectedColor("yellow")}className={"light yellow"+(selectedColor === "yellow" ? "glow" : "" )}></div>
       </div>
       </form>
    </div>
 
}