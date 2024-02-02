import React from "react";


export const Contacto = () => {
    return (
        <div>
            <section className="m-5 p-5">
                <h1 className="text-center">Contactanos</h1>
                <p className="text-center mx-auto mb-5">
                    Tienes alguna pregunta? Por favor no dudes en contactarnos directamente. 
                    Nuestro equipo te contactara para ayudarte lo antes posible
                </p>
                <div className="row">
                    <div className="col-md-9 mb-5">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="m-3">
                                        <label htmlFor="name" className="">Nombre</label>
                                        <input type="text" id="name" name="name" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="m-3">
                                        <label htmlFor="email" className="">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="m-3">
                                        <label htmlFor="subject" className="">Asunto</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="m-3">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea type="text" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center">
                            <a className="btn btn-dark">Enviar</a>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li>
                                <i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+1 234-567-8959</p>
                            </li>
                            <li>
                                <i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>Contacto@runnest.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
    
        </div>
            </section>
        </div>
    )
}