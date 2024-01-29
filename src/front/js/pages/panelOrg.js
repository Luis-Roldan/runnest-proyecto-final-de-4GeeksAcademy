import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/panel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PanelOrg = () => {
    return(
        <div>
            <aside>
                <div className="panel-box">
                    <p className="panel-item ps-3 py-2">
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-person-running" />
                        Publicar carrera
                    </p>
                    <p className="panel-item ps-3 py-2">
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-chart-simple" />
                        Ganancias
                    </p>
                    <p className="panel-item ps-3 py-2">
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-comments" />
                        Soporte
                    </p>
                    <p className="panel-item ps-3 py-2">
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-gear" />
                        Configuraciones
                    </p>
                    <p className="panel-item ps-3 py-2">
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-arrow-right-from-bracket" flip="horizontal" />
                        Log out
                    </p>
                </div>
            </aside>
        </div>
    )
}