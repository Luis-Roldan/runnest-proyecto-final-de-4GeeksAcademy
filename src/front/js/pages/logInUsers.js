import React, { useState, useEffect, useContext } from "react";
import "../../styles/logInUser.css"

export const LoginUsers = () => {



    return (
        <div className="d-flex p-5 justify-content-center align-items-center">
            <form className="shadow p-5">
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="contraseña" />
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </div>
            </form>
            <div className="w-50 shadow p-5 side-div text-center d-flex flex-column justify-content-evenly">
                <div>
                    <h3>Bienvenido a Runnest</h3>
                    <h6>inicia sesión para continuar</h6>
                </div>
                <div>
                    <h3 className="pt-5">No tienes cuenta?</h3>
                    <button type="submit" class="btn btn-light">Regístrate</button>
                </div>
            </div>
        </div>
    )
};