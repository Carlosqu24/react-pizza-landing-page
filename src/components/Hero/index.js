import React from 'react'

import './Hero.css'


export const Hero = () => {
      return (
            <div id="#" className="hero">
                  <div className="container">
                  <div className="hero-card">
                        <h2 className="hero-card__title">La mejor pizza de la zona</h2>
                        <p className="hero-card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, tempore.</p>
                  </div>
                  
                  <img className="hero__img" src="https://www.crustpizzaco.com/assets/theme/cpc/images/pizza-main.png" alt="" />          
                  </div>
            </div>
      )
}
