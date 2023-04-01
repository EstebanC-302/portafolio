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
                    <div className="col-lg-4 ml-auto"><p class="lead">Soy venezolano tengo 21 años de edad me considero una persona  proactiva, responsable, honesta y puntual, me encanta la progrmacion. Cada dia me mantengo en continuo conocimiento y actualizado con las actualizaciones que les realizan a las tecnologias que utilizo día a día para el desarrollo frontend.</p></div>
                    <div className="col-lg-4 mr-auto"><p class="lead">Aparte de dedicarle ciertas horas a la programacion , tambien me gusta realizar actividades fisicas, recreativas  y culinarias.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                        <button>
                            <a href="https://drive.google.com/file/d/1X8_n9ENh7t_YaCx8xNLl3E6NqNY6NB-0/view?usp=sharing" target="blank_" className="btn btn-xl btn-outline-light">
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