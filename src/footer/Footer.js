import React from "react";
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
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com" target="blank_"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/?lang=es" target="blank_"><i class="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://ar.linkedin.com" target="blank_"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        
        
    );
} 

export{Footer};