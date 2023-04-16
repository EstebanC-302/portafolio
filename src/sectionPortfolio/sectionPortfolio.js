import React from "react";
import './sectionPortfolio.css';
import ImagenContador from '../imagenes/Contador.png'
import ListaTodos from '../imagenes/ListaTodo.png'
import NetflixClon from '../imagenes/NetflixClon.png'
import ReproductorAudio from '../imagenes/ReproductorAudio.png'
import FitGym from '../imagenes/FitGym.png'
import Dashnoard from '../imagenes/Dashboad.png'


function SectionPortfolio () {
    return(
        <section className="page-section portfolio" id="proyecto">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Proyectos</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div class="row">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <a href="https://soft-frangipane-db03e9.netlify.app" target="_blank" rel="noreferrer"> 
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="overlay ">
                                    <p className="h4 text-white">Contador</p>
                                    <p className="textmuted">React Js, Htlm, Css3, Javascript.</p>
                                </div>
                            </div>
                            <img className="img-fluid" src={ImagenContador} alt="" />
                        </div>
                        </a>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <a href="https://curious-dieffenbachia-92c401.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="overlay ">
                                    <p className="h4 text-white">Lista de Tareas</p>
                                    <p className="textmuted">React Js, Htlm, Css3, Javascript..</p>
                                </div>
                            </div>
                            <img className="img-fluid" src={ListaTodos} alt="" />
                        </div> 
                        </a>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <a href="https://netflix-clon-eosin.vercel.app/auth" target="_blank" rel="noreferrer">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="overlay ">
                                        <p className="h4 text-white">Netflix Clon</p>
                                        <p className="textmuted">React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth ,Vercel Git, Github</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={NetflixClon} alt="" />
                            </div>
                        </a>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <a href="https://stately-maamoul-5a67c0.netlify.app/" target="_blank" rel="noreferrer"> 
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="overlay ">
                                        <p className="h4 text-white">Reproductor de Audio</p>
                                        <p className="textmuted">Html, Css3, Javascript. Git, Github</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={ReproductorAudio} alt="" />
                            </div>
                        </a>
                        
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <a href="https://lovely-hamster-ea0253.netlify.app/" target="_blank" rel="noreferrer">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="overlay ">
                                        <p className="h4 text-white">FitGym</p>
                                        <p className="textmuted">React Js, Css3, Javascript. EmailJs, Git , Github</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={FitGym} alt="" />
                            </div>
                        </a>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className="col-md-6 col-lg-4">
                        <a href="https://dashing-stroopwafel-a52d8c.netlify.app" target="_blank" rel="noreferrer">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="overlay ">
                                        <p className="h4 text-white">Dashboard</p>
                                        <p className="textmuted">Css3, JavaScript React Router V6, Full Calendar, Material React Table, React ECharts, Git, Github</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={Dashnoard} alt="" />
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export {SectionPortfolio};