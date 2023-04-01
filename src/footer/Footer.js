import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

function Footer () {
    return(
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">ubicación</h4>
                        <p className="lead mb-0">
                            Buenos Aires 
                            <br />
                            Argentina
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Redes Sociales</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com" target="blank_"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/?lang=es" target="blank_"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://ar.linkedin.com" target="blank_"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://ar.linkedin.com" target="blank_"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
        </footer>
        
        
    );
} 

export{Footer};