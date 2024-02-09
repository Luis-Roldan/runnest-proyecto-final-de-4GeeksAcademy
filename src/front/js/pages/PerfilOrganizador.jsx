import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from 'react-dom'


export const PerfilOrganizador = () => {
    const [isClicked, setIsclicked] = useState("favoritos")
    const { store, actions } = useContext(Context)

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => { actions.getOrganizadorData(); }, [])

    //obtener todas las carreras desde el store
    const carreras = store.carreras

    //funcion para renderizar en base al boton que se le hace click
    const handleConditionalRendering = () => {
        if (isClicked == "carreras") {
            return (
                <div className="panel-item">
                    <Link to="/RegistroDeCarreras" className="panel-item ps-3 py-2" >
                        <FontAwesomeIcon className="me-2" icon="fa-solid fa-person-running" />
                        <span>Publicar carrera</span>
                    </Link>
                </div>
            )
        } else if (isClicked == "resultados") {
            return (
                <div className="panel-item">
                    <Link to="/AgregarResultados" className="panel-item ps-3 py-2 " >
                        <FontAwesomeIcon className="me-2" icon="a-solid fa-chart-simple" />
                        <span>Agregar Resultado</span>
                    </Link>
                </div>
            )

        } else if (isClicked == "reviews") {
            return <div className="">
                <div className="row justify-content-center row-cols-1 row-cols-md-4">
                    {carreras.map((item, index) => (
                        <div key={index} className="card m-3">
                            <img src={item.image} className="card-img-top ImageStyle" alt="..." style={{ maxHeight: "100px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary justify-content-between d-flex">
                                    {`${item.pais}, ${item.ciudad}.`}
                                    <p className="card-text">{`${item.dia}/${item.mes}/${item.year}`}</p>
                                </h6>
                                <p>{`Capacidad: ${item.capacidad}`}</p>
                            </div>
                            <div className="d-flex justify-content-between px-2">
                                <p>{`Dificultad: ${item.dificultad}`}</p>
                                <p>{item.costo}$</p>
                            </div>
                            <hr className="hr" />
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <button onClick={() => handleSubscripcion(item.id)} className="btn btn-dark">Agregar Resultados</button>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        }
    }


    return (
        <div>
            <section className="TopProfilePartContainer">
                <div className="LeftSideProfileTop">
                    <img src="https://rajueditor.com/wp-content/uploads/2023/09/fotos-de-perfil-aesthetic.jpg" className="ImgProfile"></img>
                    <h1 className="text-center pt-4">{`Bienvenido, ${store.organizador.nombre} ${store.usuario.apellido} a la meca de las carreras`}</h1>
                </div>
                <div className="RightSideProfileTop">
                    <h2 className="Title">tus datos personales de organizador son:</h2>
                    <h3 className="text-center pt-4">{`Correo: ${store.organizador.email}`}</h3>
                    <h3 className="text-center pt-4">{`Telefono: ${store.organizador.telefono}`}</h3>
                    <h3 className="text-center pt-4">{`Organizacion: ${store.organizador.organizacion}`}</h3>
                    <h3 className="text-center pt-4">{`Pagina web: ${store.organizador.pagina_web}`}</h3>
                </div>
            </section>
            <div className="d-flex justify-content-center pt-4">

                <button onClick={() => { setIsclicked("carreras") }} className="btn-perfil">Publicar Carrera</button>
                <button onClick={() => { setIsclicked("resultados") }} className="btn-perfil">Resultados</button>
                <button onClick={() => { setIsclicked("reviews") }} className="btn-perfil">Mis Carreras</button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                {handleConditionalRendering()}
            </div>
        </div>
    )
}