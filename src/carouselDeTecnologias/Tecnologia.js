import React from "react";
import Gitgub from '../imagenes/github.png'
import Git from '../imagenes/git.png'
import HtmlLogo from '../imagenes/html.png'
import CssLogo from '../imagenes/cssLogo.png'
import JqueryLogo from '../imagenes/jqueryLogo.png'
import BootstrapLogo from '../imagenes/booststrapLogo.png'
import JavaScriptLogo from '../imagenes/javaScriptLogo.png'
import ReactImage from '../imagenes/react.png'
import NodeLogo from '../imagenes/nodejsLogo.png'
import TailwindLogo from '../imagenes/tailwindLogo.png'
import MongoDbLogo from '../imagenes/MongoDBLogo.png'
import TypeScriptLogo from '../imagenes/typeScriptLogo.jpeg'
import "./Tecnologia.css"
function Tecnologia () {
    return (
        <section className="page-section portfolio" id="tecnologia">
            <div className="container">

                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Tecnologías</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={Git} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={Gitgub} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={HtmlLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={CssLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={JqueryLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={BootstrapLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={JavaScriptLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={ReactImage} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={NodeLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={TailwindLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={MongoDbLogo} alt="" height="100"  width="100"/>
                        </div>
                        <div className="slide">
                            <img src={TypeScriptLogo} alt=""  height="100"  width="100"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Tecnologia};