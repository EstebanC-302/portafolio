import React from "react";
import { useRef} from "react";
import emailjs from "emailjs-com"
import './SectionContact.css' 

function SectionContact () {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hf9r0ln', 'template_k3rec09', e.target, 'Pd4qO445Pyzwj6ORM')
          .then((result) => {
              alert("Se a enviado correctamente el correo")
              console.log(result);
          }, (error) => {
              console.log(error.text);
          });
      };



    return (
        <section className="page-section" id="contact">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contáctame</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                        <form id="contactForm" name="sentMessage" novalidate="novalidate" ref={form} action="" className="email-container" onSubmit={sendEmail}>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control" name="name" id="name" type="text" placeholder="Nombre" required="required" data-validation-required-message="Please enter your name." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" name="user_email" id="email" type="email" placeholder="Direccion de correo electronico" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            {/* <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Numero de telefono" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div> */}
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" name="message" id="message" rows="5" placeholder="Mensaje" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export{SectionContact};