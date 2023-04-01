import React from "react";
import '../navbar/navbar.css'

function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase  fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">Esteban Rafael Correa Contreras</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li><a className="nav-link active" aria-current="page" href="#portafolio">Portafolio</a></li>
                        <li><a className="nav-link" href="#tecnologia">Tecnologías</a></li>
                        <li><a className="nav-link" href="#about">Acerca de mi</a></li>
                        <li><a className="nav-link" href="#contact">Contacto</a></li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export {Navbar};