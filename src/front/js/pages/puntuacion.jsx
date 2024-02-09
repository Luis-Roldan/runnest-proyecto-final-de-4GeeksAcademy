import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Context } from "../store/appContext";
import "../../styles/puntuacion.css";

export const Puntuacion = () => {
  const colors = {
    orange: "#FFD700",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState([]);
  const url = process.env.REACT_ENV_URL; 

  const { store, actions } = useContext(Context);

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

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const resp = await fetch(url + "/puntuacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          rating: currentValue,
          feedback: feedback,
        }),
      });

      if (!resp.ok) {
        throw new Error("There was a problem submitting your feedback");
      }
      
      
      setComments([...comments, { feedback, rating: currentValue }]);
    } catch (error) {
      console.error("Error:", error.message);
     
    }
  };

  return (
    <div className="container-puntuacion">
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
      <div className="comentarios">
        <h3>Comentarios:</h3>
        <ul className="list-group">
          {comments.map((comment, index) => (
            <li key={index} className="list-group-item">
              <div>Puntuación: {comment.rating}</div>
              <div>Feedback: {comment.feedback}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="back-to"><Link to="/">Home</Link></div>
    </div>
  );
};
