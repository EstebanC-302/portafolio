import React from "react";
import './header.css'
function Header () {
    return(
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5 rounded-circle" src="" alt="" />
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Esteban Correa</h1>
                {/* <!-- Icon--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Desarrollador  Frontend</p>
            </div>
        </header>
    );
}

export{Header};