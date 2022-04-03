import React from "react";
import './SectionDescription.css'


function SectionDescription () {
    return(
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">Acerca de</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p class="lead">Soy venezolano tengo 20 años de edad me considero una persona  proactiva, responsable, honesta y puntual, me guta mucho la progrmacion apenas estoy comenzando en este maravilloso mundo , pero siento que cada dia que paso leyendo e investigando acerca de estas tecnologias me apasiona cada vez mas  seguir aprendiendo y dedicarme de lleno a esto.</p></div>
                    <div className="col-lg-4 mr-auto"><p class="lead">Aparte de dedicarle ciertas horas a la programacion , tambien me gusta realizar actividades fisicas, recreativas  y culinarias las cuales me ayudan tanto a descansar un poco , como tambien me ayuda para poder pensar en como puedo hacer para resolver dicho problema que tenga</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light">
                        <i className="fas fa-download mr-2"></i>
                        Curriculum
                    </a>
                </div>
            </div>
        </section>
    );
}

export {SectionDescription};