import React from "react";
import './SectionDescription.css';




function SectionDescription () {
    return(
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">Acerca de Mi</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p class="lead">Soy una persona proactiva, responsable, honesta, puntual y con buenas relaciones interpersonales. Siempre tengo la mejor disposición para la realización de mis labores. Busco un puesto de trabajo desafiante. Cuento con ciertos  conocimiento en diferentes tecnologías como HTML5, Css3, Js, React, BOOTSTRAP, tailwind y Node js entre otros. Me encuentro en la búsqueda de la oportunidad para ingresar en el área del desarrollo front-end, para poner en practica los conocimientos adquiridos hasta ahora.</p></div>
                    <div className="col-lg-4 mr-auto"><p class="lead">Aparte de dedicarle ciertas horas a la programacion , tambien me gusta realizar actividades fisicas, recreativas  y culinarias.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                        <button>
                            <a href="https://drive.google.com/file/d/1MS7OKFpkgwp9rmjQuMN_xS9yzqfZKPn1/view?usp=share_link" target="blank_" className="btn btn-xl btn-outline-light">
                                <i className="fas fa-download mr-2"></i>
                                Curriculum
                            </a>
                        </button>
                </div>
            </div>
        </section>
    );
}

export {SectionDescription};