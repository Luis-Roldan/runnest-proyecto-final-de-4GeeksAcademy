import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMeta } from '@fortawesome/free-brands-svg-icons';
import "../../styles/footer.css"



export const Footer = () => {
	return (

		<div className="container-footer align-items-center mt-5">
			<footer >
				<div className="line-above-footer"></div>
				<div className="row footer-content pt-3">
				<div className="col-2 footer-viajes">
						<h5>Carreras</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><Link to="/carreras" className="nav-link p-0 text-muted" >Planea tu siguiente carrera</Link></li>
			
						</ul>
					</div>
					<div className="col-2 footer-business">
						<h5>Empresa</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><Link to="/cookies" className="nav-link p-0 text-muted" >Política de cookies</Link></li>
							<li className="nav-item mb-2"><Link to="/politicas" className="nav-link p-0 text-muted" >Política de privacidad</Link></li>
							<li className="nav-item mb-2"><Link to="/contacto" className="nav-link p-0 text-muted">Contacto</Link></li>
						</ul>
					</div>
					<div className='col-2'></div>
					<div className="col-5 offset-1">
						<form className='mb-4'>
							<h5>Suscríbete a nuestro Newsletter</h5>
							<p>Recibe ofertas y promociones exclusivas.</p>
							<div className="d-flex w-100 gap-2">
								<label htmlFor="newsletter1" className="visually-hidden">Correo electrónico</label>
								<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
								<button className="btn btn-primary" type="button">Subscribe</button>
							</div>
						</form>
	
					</div>
				</div>

				<div className="d-flex justify-content-between pt-2 my-2 border-top">
					<p className='mt-2'><strong>© 2023 RUNNEST, S,L.</strong>Todos los derechos reservados.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3"><a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{color: "black", fontSize: "1.5rem"}} /></a></li>
						<li className="ms-3"><a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{color: "black", fontSize: "1.5rem"}}/></a></li>
						<li className="ms-3"><a href="https://www.facebook.com" target='_blank'rel="noopener noreferrer"><FontAwesomeIcon icon={faMeta} style={{color: "black", fontSize: "1.4rem"}}/></a></li>
					</ul>
				</div>
			</footer>
		</div>
	);

};

export default Footer;