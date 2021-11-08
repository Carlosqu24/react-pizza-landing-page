import React from 'react'

import './About.css'

export const About = () => {
      return (
            <div id="about" className="about">
                  <div className="container">
                        <img className="about__img" src="https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div className="about-card">
                              <h2 className="about-card__title">Sobre nosotros</h2>
                              <p className="about-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum officiis dignissimos, ducimus a consequuntur inventore totam soluta? Architecto, repellendus?</p>
                              <p className="about-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum officiis dignissimos, ducimus a consequuntur inventore totam soluta? Architecto, repellendus?</p>
                              <a className="about-card__link" href="#">Ver más</a>
                        </div>
                  </div>
            </div>
      )
}
