import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Context } from "../store/appContext";
import "../../styles/puntuacion.css"

export const Puntuacion = () => {
  const colors = {
    orange: "#FFD700",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedback, setFeedback] = useState("");
  const url = process.env.REACT_ENV_URL
  
  const { store, actions } = useContext(Context)

  // useEffect(() => { actions.getCarreras(); }, [])



  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    // Solicitud POST
    fetch(url + "/puntuacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: currentValue,
        feedback: feedback,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar la calificación:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Califica tu carrera!</h1>
      <h3 className="text-center pt-4">{`nombre: ${store.carreras[1]?.nombre}`}</h3>
      <h3 className="text-center pt-4">{`ciudad: ${store.carreras[1]?.ciudad}`}</h3>
      <h3 className="text-center pt-4">{`distancia: ${store.carreras[1]?.distancia}`}</h3>
      <div className="stars">
        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={24}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="feedback">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          What's your feedback?
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleFeedbackChange}
        ></textarea>
      </div>

      <div className="button">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};
