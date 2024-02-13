import React from "react";
import "../../styles/aboutUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
        <span></span>
        <span>Nos comprometemos a hacer mejoras continuas a nuestro sitio, planeamos en un futuro brindarte la posibilidad de adquirir productos de la mejor calidad para que puedas correr con la mayor comodidad y confianza, además, estamos viendo la posibilidad de generar un blog para que la comunidad runner pueda interactuar e intercambair fotografías, opiniones y tips, de esta manera, hacer crecer este maravilloso deporte!</span>

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

      <div className="cards">
        <span><h2>Conoce a nuestros fundadores?</h2></span>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://media.licdn.com/dms/image/D4E03AQEAWvch2un5Cg/profile-displayphoto-shrink_800_800/0/1697820004120?e=1712793600&v=beta&t=Yy5BeGUx5IKlCd9ENQyiHgwGgYwjGOk_xE3uZMV3XM0" alt="imagen" className="circular-image" />
              <div className="card-body">
                <h5 className="card-title">Luis Fernando Roldán Ortiz</h5>
                <p className="card-text">Co-Fundador</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary"><strong>Edad: </strong> 29</small>
                <br />
                <small className="text-body-secondary"><strong>Estudios: </strong> Bachiller en Traducción e Interpretación</small>
                <br />
                <small className="text-body-secondary"><strong>Hobbies: </strong> Nadar, Correr y visitar lugares nuevos</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://media.licdn.com/dms/image/D4E03AQGJUfErrT0XIQ/profile-displayphoto-shrink_800_800/0/1706652367159?e=1712793600&v=beta&t=1ZZlYfcPvOGChJNvtfVBm7pzJIY2HF8Ekal--pL6gQM" alt="imagen" className="circular-image" />
              <div className="card-body">
                <h5 className="card-title">Jose Antonio Morillo</h5>
                <p className="card-text">Co-Fundador</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary"><strong>Edad: </strong> </small>
                <br />
                <small className="text-body-secondary"><strong>Estudios: </strong>  </small>
                <br />
                <small className="text-body-secondary"><strong>Hobbies: </strong></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://media.licdn.com/dms/image/C5603AQHDwW8CqQI4vQ/profile-displayphoto-shrink_800_800/0/1543472870909?e=1712793600&v=beta&t=iCaN-fm06T8GBvs_jfFM5N3X_Ror8nZjtrF9Rao2BLU" alt="imagen" className="circular-image" />
              <div className="card-body">
                <h5 className="card-title">Sofia Vanessa Garcia Tovar</h5>
                <p className="card-text">Co-Fundador</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary"><strong>Edad: </strong> </small>
                <br />
                <small className="text-body-secondary"><strong>Estudios:  </strong>Ing. Sistemas Computacionales  </small>
                <br />
                <small className="text-body-secondary"><strong>Hobbies:  </strong> Lectura, hiking y alfarería</small>
              </div>
            </div>
          </div>
        </div>
      </div>
<div> <strong>Este proyecto fue desarrollado con : </strong> 
<span>
<img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png" width="30px" height="30px" className="html5"/>  
<img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-1024.png" width="30px" height="30px" className="css3"/>
<img src="https://tse2.mm.bing.net/th?id=OIP.I5XOh9o_kbTNsXnsIc53aAHaHa&pid=Api&P=0&h=180" width="30px" height="30px" className="javascript"/>
<img src="https://tse2.mm.bing.net/th?id=OIP.udRsxeiTDWCEXRaKP_prTAHaHk&pid=Api&P=0&h=180" width="30px" height="30px" className="python"/>
<img src="https://tse1.mm.bing.net/th?id=OIP.ag7bB6adDWKvvw7BBbntewHaHa&pid=Api&P=0&h=180" width="30px" height="30px" className="python"/>
<img src="https://tse1.mm.bing.net/th?id=OIP.dvZOtO5OujoVHmYA7Rn-qAHaHv&pid=Api&P=0&h=180" width="30px" height="30px" className="flask"/>
<img src="https://tse4.mm.bing.net/th?id=OIP.JVt34lGxmm0GAGNNL_mwBgHaHa&pid=Api&P=0&h=180" width="33px" height="33px" className="flask"/>
<img src="https://tse2.mm.bing.net/th?id=OIP.fByyZnA2MzQb6k_PmVi1gwHaJj&pid=Api&P=0&h=180" width="33px" height="33px" className="flask"/>
<img src="https://tse2.mm.bing.net/th?id=OIP.R0P2_SJZKDxErOJ_CBmCeQHaD3&pid=Api&P=0&h=180" width="73px" height="43px" className="flask"/>

  </span>

   </div> 

    </div>
  )
}