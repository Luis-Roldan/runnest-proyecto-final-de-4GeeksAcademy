import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMeta } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p className="footerText mt-4">
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <span>Sofia, Jose y Luis</span>
    </p>
    <div className="d-flex justify-content-between pt-2 my-2 border-top">
      <p className='mt-2'><strong>© 2023 RUNNEST, S,L.</strong>Todos los derechos reservados.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{ color: "black", fontSize: "1.5rem" }} /></a></li>
        <li className="ms-3"><a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: "black", fontSize: "1.5rem" }} /></a></li>
        <li className="ms-3"><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faMeta} style={{ color: "black", fontSize: "1.4rem" }} /></a></li>
      </ul>
    </div>
  </footer>
);
