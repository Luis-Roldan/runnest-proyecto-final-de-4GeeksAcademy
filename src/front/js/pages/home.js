import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { AlertSuccess } from "../component/alertSuccess";
import { AlertDanger } from "../component/alertDanger";
import "../../styles/carreras.css"

import "../../styles/home.css";
import { disableValidation } from "schema-utils";
import { Footer } from "../component/footer";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const carreras = store.carreras

  //obtener el tipo de usuario desde el local storage
  const userType = localStorage.getItem("userType")

  //declarar el useNavigate
  const navigate = useNavigate()

  return (
    <div>
      <div className="insideHero">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h3 className="mb-5 mt-5">Descubre la carrera que mas se ajuste a ti</h3>
          <p>
            Busca y encuentra carreras al rededor del mundo y encuentra la <br />
            perfecta para ti. Además de encontrar información adicional de la <br />
            carrera y reseñas de las personas que ya la han realizado.
          </p>
        </div>
      </div>
      <div className="CarrerasHome">
        <h2 className="TitleSecondPartOfHome">
          Disfruta la carrera de tus sueños
        </h2>
        <div>
          {carreras.map((item, index) => (
            <div key={index} className="card m-3 CardSize">
              <img src={item.image} className="card-img-top ImageStyle" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary justify-content-between d-flex">
                  {`${item.pais}, ${item.ciudad}.`}
                  <p className="card-text">{`${item.dia}/${item.mes}/${item.year}`}</p>
                </h6>
                <p>{`Capacidad: ${item.capacidad}`}</p>
                <div className="d-flex justify-content-between">
                  <p>{`Dificultad: ${item.dificultad}`}</p>
                  <p>{item.costo}$</p>
                </div>
              </div>
              <hr className="hr" />
              <div className="d-flex justify-content-between align-items-center px-3 mb-2">
                <button onClick={() => handleSubscripcion(item.id)} className="btn btn-dark">Registrarme</button>
                <FontAwesomeIcon
                  className="btn btn-light border-1 border-danger heart"
                  onClick={() => { postFavorite(item.id) }}
                  icon="fa-regular fa-heart"
                  size="xl"

                />
              </div>
              <Link to={userType === "usuario" ? `/carreraRender/${item.id}` : "/loginUsers"} style={{ textDecoration: 'none' }} onClick={() => handleClick(item.id)}>Califica esta carrera!</Link>
              <Link to={`/VerResultados/${item.id}`} className="panel-item ps-3 py-2 " >
                <FontAwesomeIcon className="me-2" icon="a-solid fa-chart-simple" />
                <span>Ver Resultados</span>
              </Link>

            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};
