import React from 'react';
import "../../styles/cookies.css"


export const Cookies = () => {
  return (
    <div className='container'>
      <header>
        <h1>Política de Cookies</h1>
      </header>

      <main>
        <section>
          <h2 class>Uso de Cookies</h2>
          <p>Utilizamos cookies en nuestro sitio web para mejorar la experiencia de nuestros visitantes. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Nos ayudan a comprender mejor cómo interactúa con nuestro contenido y a personalizar su experiencia de navegación.</p>
        </section>
        <section>
          <h2 className='cookies'>Tipos de Cookies Utilizadas</h2>
          <p><strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento básico de nuestro sitio web y siempre están activadas. Incluyen cookies que le permiten navegar por el sitio y utilizar sus funciones.</p>
          <p><strong>Cookies de rendimiento:</strong> Estas cookies nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio al recopilar información de manera anónima. Esto nos permite mejorar constantemente nuestro sitio para ofrecer la mejor experiencia posible.</p>
          <p><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que nuestro sitio recuerde las elecciones que realiza (como su idioma preferido o su región) y proporcionen funciones mejoradas y personalizadas.</p>
        </section>
        <section>
          <h2>Control de Cookies</h2>
          <p>Puede controlar y gestionar las cookies en la configuración de su navegador. Tenga en cuenta que desactivar algunas cookies puede afectar la funcionalidad de nuestro sitio web.</p>
        </section>
      </main>
      <footer>
        <p>Para cualquier pregunta sobre nuestra política de cookies, por favor contáctenos en la siguiente dirección de correo electrónico: <a href=" contactolegal@runnest.com">RUNNEST LEGAL</a>  .</p>
      </footer>
    </div>
  );
};

export default Cookies;