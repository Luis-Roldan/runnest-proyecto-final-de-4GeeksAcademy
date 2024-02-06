import React, { useEffect, useState } from "react";

export const AlertDanger = ({message, estilo, funcion}) => {

    return (
        <div 
            style={estilo} 
            className="alert alert-danger w-50 justify-content-between" 
            role="alert">
            {message}
            <button 
                onClick={funcion} 
                type="button" 
                className="btn-close" 
            >
            </button>
        </div>
    )
}