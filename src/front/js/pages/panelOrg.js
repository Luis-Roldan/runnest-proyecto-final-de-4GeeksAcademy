import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/panel.css"

export const PanelOrg = () => {
    return(
        <div>
            <aside>
                <div className="panel-box">
                    <p className="panel-item ps-3 py-2">Publicar carrera</p>
                    <p className="panel-item ps-3 py-2">Ganancias</p>
                    <p className="panel-item ps-3 py-2">Soporte</p>
                    <p className="panel-item ps-3 py-2">Configuraciones</p>
                    <p className="panel-item ps-3 py-2">Log out</p>
                </div>
            </aside>
        </div>
    )
}