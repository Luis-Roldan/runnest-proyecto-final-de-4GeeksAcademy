import React from "react";
import { BrowserRouter, Navigate, Route, Routes, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { PerfilUsuario } from "./pages/perfilUsuario.js";
import { PerfilOrganizador } from "./pages/PerfilOrganizador.jsx";
import { AgregarResultados } from "./pages/AgregarResultados.jsx";
import { VerResultados } from "./pages/VerResultados.jsx";
import { LoginUsers } from "./pages/logInUsers.jsx";
import { LoginForOrganizers } from "./pages/logInForOrganizers.jsx";
import { Home } from "./pages/home";
import { SignUpUsers } from "./pages/signUpUsers.jsx";
import { SignUpForOrganizers } from "./pages/signUpForOrganizers.jsx";
import { RegistroDeCarreras } from "./pages/CareerRegistration.jsx";
import injectContext from "./store/appContext";
import { Carreras } from "./pages/carreras.js";
import { Contacto } from "./pages/contacto.js";
import { Puntuacion } from "./pages/puntuacion.jsx";
import { CarreraRender } from "./pages/carreraRender.jsx";
import { Politicas } from "./pages/politicas.jsx";
import { Cookies } from "./pages/cookies.jsx";



import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PanelOrg } from "./pages/panelOrg.js";
import { AboutUs } from "./pages/AboutUs.jsx";


const Layout = () => {
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    const userType = localStorage.getItem("userType")




    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Carreras />} path="/carreras" />
                        <Route element={<Contacto />} path="/contacto" />
                        <Route element={<AboutUs />} path="/AboutUs" />
                        <Route element={<Puntuacion />} path="/puntuacion" />
                        <Route element={<Politicas />} path="politicas" />
                        <Route element={<Cookies />} path="cookies" />
                        <Route element={<CarreraRender />} path="/carreraRender/:id" />



                        <Route element={<SignUpUsers />} path="/signUpUsers" />
                        <Route element={<LoginUsers />} path="/loginUsers" />
                        <Route element={userType == "usuario" ? <PerfilUsuario /> : <Navigate to="/LoginUsers" />} path="/perfil" />

                        <Route element={<SignUpForOrganizers />} path="/signUpForOrganizers" />
                        <Route element={<LoginForOrganizers />} path="/LoginForOrganizers" />
                        <Route element={userType == "organizador" ? <PerfilOrganizador /> : <Navigate to="/LoginForOrganizers" />} path="/PerfilOrganizador" />
                        <Route element={<RegistroDeCarreras />} path="/RegistroDeCarreras" />

                        <Route element={<AgregarResultados />} path="/AgregarResultados/:id" />
                        <Route element={<VerResultados />} path="/VerResultados/:id" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
