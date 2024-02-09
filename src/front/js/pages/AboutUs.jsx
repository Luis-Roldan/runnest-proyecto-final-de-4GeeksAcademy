import React, { useContext, useState } from "react";
import "../../styles/aboutUs.css"
import AvatarEditor from 'react-avatar-editor'


export const AboutUs = () => {
    return (
        <div className="container">
            <h1>RUNNEST</h1>
            <div className="nosotros">
                <span>Bienvenido a Runnest tu destino definitivo para todo lo relacionado con maratones y carreras de todo tipo. Nos dedicamos a inspirar, informar y apoyar a corredores de todos los niveles, desde principiantes hasta atletas experimentados, en su viaje hacia la superación personal y el logro de metas.
                </span>
                <span>En Runnest, creemos en el poder transformador del running. Ya sea que estés buscando mejorar tu salud, desafiar tus límites personales o simplemente disfrutar del compañerismo y la emoción de las carreras, estamos aquí para ayudarte en cada paso del camino.
                </span>
                <span>Nuestra plataforma ofrece una amplia gama de recursos, incluyendo consejos de entrenamiento, reseñas de equipos y productos, cobertura de eventos destacados, guías de nutrición y recuperación, así como también una vibrante comunidad en línea donde los corredores pueden conectarse, compartir experiencias y motivarse mutuamente.
                </span>
                <span>En Runnest, nos enorgullecemos de proporcionar contenido de calidad y orientación experta para ayudarte a alcanzar tus objetivos. Nuestro equipo está formado por apasionados corredores y expertos en la materia, comprometidos a brindarte la información más actualizada y relevante para mejorar tu experiencia de running.
                </span>

                <span>¡Únete a nosotros en esta emocionante aventura! Ya sea que estés corriendo tu primera milla o preparándote para tu próximo maratón, estamos aquí para inspirarte, educarte y celebrar tus logros. Juntos, vamos a recorrer kilómetros y alcanzar metas que parecían imposibles.
                </span>

                <span>¡Corramos juntos hacia un futuro más saludable, activo y lleno de logros!</span>



               <span>¡Bienvenido a Runnest!</span> 
            </div>


            <div className="cards">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://bit.ly/3HPa4Yb" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">Londres 2020.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://okdiario.com/img/2015/11/27/estos-son-los-maratones-mas-rapidas-del-mundo-1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">Rio de Janeiro 2023.</p>
                            </div>
                        </div>
                    </div>

                    
            </div>
</div>
        </div>
    )
}