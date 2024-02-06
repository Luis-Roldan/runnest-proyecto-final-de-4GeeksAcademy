import React, { useEffect, useState } from "react";

export const AlertSuccess = ({message, estilo, funcion}) => {

    return (
        <div 
            style={estilo} 
            className="alert alert-success w-50 justify-content-between" 
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