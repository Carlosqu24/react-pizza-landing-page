import React from 'react'

import './Contact.css'

export const Contact = () => {
      return (
            <div id="contact" className="contact section">
                  <h2 className="section__title">
                        Contacto
                  </h2>

                  <div className="container">
                        <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.602043069814!2d-83.70056628531697!3d9.368438693285883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14f98cba4eab7%3A0x799693151eb0cc78!2sPizza%20Pata%20P%C3%A9rez%20Zeled%C3%B3n!5e0!3m2!1ses!2scr!4v1636328494200!5m2!1ses!2scr" height="450"  allowfullscreen="" loading="lazy"></iframe>
                        <div className="contact__info">
                              <h2>Información de contacto</h2>

                              <div className="contact-group">
                                    <h2>Dirección</h2>
                                    <p>Jilguero, 25 metros sur del puente del río, San José, San Isidro de El General.</p>
                              </div>

                              <div className="contact-group">
                                    <h2>Correo</h2>
                                    <p>correo@ejemplo.com</p>
                              </div>

                              <div className="contact-group">
                                    <h2>Teléfono</h2>
                                    <p>+50684848484</p>
                              </div>

                              <div className="contact-group">
                                    <h2>Redes sociales</h2>
                                    <ul>
                                          <li><a href="#">Facebook</a></li>
                                          <li><a href="#">Instagram</a></li>
                                          <li><a href="#">Twitter</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>      
      )
}
