import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/perfil.css"


export const PerfilUsuario = () => {
    const [isClicked, setIsclicked] = useState("favoritos")
    const { store, actions } = useContext(Context)

    //ejecutar la funcion getUserData para hacer un GET y obtener datos del usuario
    useEffect(() => { actions.getUserData(); }, [])

    useEffect(() => { actions.getFavorites(); }, [])

    useEffect(() => {
        actions.getCarreras();
    }, []);

    console.log(store.usuario)
    console.log(store.favoritos)
    console.log(store.carreras)


    console.log(store.usuario?.id)

    const handleDeleteFavorite = (favorito_id) => {
        actions.deleteFavorite(favorito_id)
        actions.getUserData()
    };


    //funcion para renderizar en base al boton que se le hace click
    const handleConditionalRendering = () => {
        if (isClicked == "favoritos") {
            return (
                <div className="row justify-content-center row-cols-1 row-cols-sm-4 bg-dark listaFavoritos">
                    {store.favoritos.map((item, index) => {
                        const carrera = store.carreras.find(c => c.id === item.carrera_id);
                        console.log(carrera);
                        return (
                            <div key={index} className="card m-3 CardSize ">
                                <div>
                                    <h5>{index + 1}</h5>
                                </div>
                                <div className="card-body bg-dark cardContainer">
                                    <h5 className="card-title">{carrera ? carrera.nombre : 'Nombre no encontrado'}</h5>
                                </div>
                                <button onClick={() => handleDeleteFavorite(item.id)} className="btn btn-danger">Borrar de favoritos</button>

                            </div>
                        );
                    })}
                </div>
            )
        } else if (isClicked == "carreras") {
            return "carreras"
        } else if (isClicked == "reviews") {
            return "Reseñas"
        } else if (isClicked == "resultados") {
            return "resultados"
        }
    }





    return (
        <div>
            <section className="TopProfilePartContainer">
                <div className="LeftSideProfileTop">
                    <img src="https://rajueditor.com/wp-content/uploads/2023/09/fotos-de-perfil-aesthetic.jpg" className="ImgProfile"></img>
                    <h1 className="text-center pt-4 TitleRight">{`Bienvenido, ${store.usuario.nombre} ${store.usuario.apellido} a la meca de las carreras`}</h1>
                </div>
                <div className="RightSideProfileTop">
                    <h2 className="Title">tus datos personales de usuario son:</h2>
                    <h3 className="text-center pt-4">{`Correo: ${store.usuario.email}`}</h3>
                    <h3 className="text-center pt-4">{`Telefono: ${store.usuario.telefono}`}</h3>
                    <h3 className="text-center pt-4">{`Direccion: ${store.usuario.direccion}`}</h3>
                </div>
            </section>
            <div className="d-flex justify-content-center pt-4">
                <button onClick={() => { setIsclicked("favoritos") }} className="btn-perfil">Favoritos</button>
                <button onClick={() => { setIsclicked("carreras") }} className="btn-perfil">Mis carreras</button>
                <button onClick={() => { setIsclicked("reviews") }} className="btn-perfil">Reseñas</button>
                <button onClick={() => { setIsclicked("resultados") }} className="btn-perfil">Resultados</button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                {handleConditionalRendering()}
            </div>
        </div>
    )
}