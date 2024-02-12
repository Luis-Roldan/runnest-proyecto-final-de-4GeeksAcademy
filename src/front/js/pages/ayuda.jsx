import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ayuda.css"




export const Ayuda = () => {
    return (
       
        <div className="container">
                <h1> FAQs </h1>
            <div className="preguntas">
                <span><strong>¿Quienes somos?</strong></span>
                <span>Somos una comunidad interesada en brindar soporte y visibilidad a las carreras/maratones, y brindar  un espacio para promocionarse a aquellos organizadores que buscan lograr el éxito en sus eventos.
                    Si tienes mas dudas, haz click en el siguiente enlace para conocer a los fundadores y los planes a futuro que tenemos como comunidad.
                    < Link className="nav-link text-dark" to="/AboutUs">About us</Link>
                </span>
                <span><strong>¿Cual es nuestra misión?</strong></span>
                <span>
                    <span>En RUNNEST nos dedicamos a inspirar, apoyar e informar a corredores de todos los niveles, desde principiantes hasta atletas experimentados, en su viaje hacia la superación personal y el logro de metas. Nuestra misión es proporcionar un espacio en línea vibrante y acogedor donde los entusiastas del running puedan encontrar recursos valiosos, conexiones significativas y motivación constante para alcanzar su máximo potencial como corredores y como individuos.</span>

                    <span>Nos esforzamos por ofrecer contenido de alta calidad que abarque todos los aspectos del running, desde consejos de entrenamiento y técnicas de carrera hasta información sobre nutrición, recuperación y bienestar general. Creemos en el poder transformador del running para mejorar la salud física, mental y emocional, y nos comprometemos a ser un catalizador positivo en el viaje de cada corredor hacia una vida más activa, saludable y satisfactoria.
                    </span>
                    <span>En RUNNEST, nos enorgullece ser más que una simple fuente de información; somos una comunidad unida de apasionados del running que se apoyan mutuamente, comparten experiencias y celebran los logros individuales y colectivos. Nuestro objetivo es crear un ambiente inclusivo y alentador donde cada corredor se sienta valorado, motivado y capacitado para perseguir sus sueños y desafiar sus límites.</span>

                    <span>Únete a nosotros en nuestra misión de correr hacia un futuro más saludable, activo y lleno de logros. Juntos, vamos a recorrer kilómetros y alcanzar metas que parecían imposibles. ¡Bienvenido a RUNNEST!
                    </span>
                </span>
                <span><strong>¿En que lugares puedo encontrar carreras?</strong></span>
                <span>Actualmente tenemos presencia solamente en LATAM
                </span>
                <span><strong>¿Porque utilizamos como divisa el dolar?</strong></span>
                <span>En América Latina (LATAM), nos encontramos con diversas divisas, lo que puede generar complicaciones al buscar carreras en otros países. Por ello, hemos decidido implementar una solución que simplifique esta experiencia: hemos adoptado una divisa universal.</span>

                <span>Esta divisa universal está diseñada para facilitar el proceso de búsqueda y registro en carreras internacionales para aquellos que residen en América Latina. Con esta iniciativa, buscamos eliminar las barreras financieras y simplificar los trámites relacionados con la participación en eventos deportivos alrededor del mundo.
                </span>
                <span>Al utilizar una divisa universal, ofrecemos a nuestros usuarios una experiencia más conveniente y transparente al realizar transacciones en el contexto de eventos deportivos internacionales. Ya no tendrán que preocuparse por las fluctuaciones de las tasas de cambio o las comisiones bancarias al inscribirse en carreras fuera de su país de origen.</span>

                <span>Nuestra meta es proporcionar un servicio integral que facilite el acceso a carreras de todo el mundo, promoviendo así la participación en eventos deportivos internacionales y fomentando un estilo de vida activo y saludable en la región de América Latina.
                </span>
                <span><strong>¿Como puedo publicar mi carrera?</strong></span>
                <span>El proceso es sencillo: Solo tienes que crear tu usuario como Organizador, iniciar sesion y automaticamente seras redirigido a una pagina donde podrás crear una carrera!

                </span>
                <span><strong>¿Tienes más dudas?</strong></span>
                <span>No dudes en enviarnos un correo a : <a href=" contacto@runnest.com">RUNNEST </a>

                </span>
            </div>
        </div>
    )
}