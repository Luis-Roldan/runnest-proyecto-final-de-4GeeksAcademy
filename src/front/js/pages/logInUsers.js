import React, { useState, useEffect, useContext } from "react";

export const LoginUsers = () => {



    return (
        <div className="d-flex p-5 justify-content-center align-items-center flex-column">
            <div className="w-50 rounded shadow p-5">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="contraseña" />
                </div>
            </div>
        </div>
    )
};