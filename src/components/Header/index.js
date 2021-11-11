import React, { useState } from 'react'

import './Header.css';
import logo from '../../assets/images/logo.png'

export const Header = () => {
      const [active, setActive] = useState(false)


      const handleClick = (e) => setActive(!active)

      return (
            <header className="header">
                  <div className="container">
                        <img src={logo} alt="" className="header__logo" />

                        <ul className="navbar">
                              <li className="navbar__item">
                                    <a href="#" className="navbar__link">Inicio</a>
                              </li>

                              <li className="navbar__item">
                                    <a href="#about" className="navbar__link">Sobre Nosotros</a>
                              </li>

                              <li className="navbar__item">
                                    <a href="#menu" className="navbar__link">Menú</a>
                              </li>

                              <li className="navbar__item">
                                    <a href="#contact" className="navbar__link">Contacto</a>
                              </li>
                        </ul>

                        {
                              active && (
                                    <ul className={`navbar--mobile`}>
                                          <li className="navbar__item">
                                                <a href="#" onClick={handleClick} className="navbar__link">Inicio</a>
                                          </li>

                                          <li className="navbar__item">
                                                <a href="#about" onClick={handleClick} className="navbar__link">Sobre Nosotros</a>
                                          </li>

                                          <li className="navbar__item">
                                                <a href="#menu" onClick={handleClick} className="navbar__link">Menú</a>
                                          </li>

                                          <li className="navbar__item">
                                                <a href="#contact" onClick={handleClick} className="navbar__link">Contacto</a>
                                          </li>
                                    </ul>
                              )
                        }

                        <svg className="burger-menu" onClick={handleClick} width="45px" height="45px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                              fill="currentColor"
                              />
                        </svg>
                  </div>
            </header>
      )
}
