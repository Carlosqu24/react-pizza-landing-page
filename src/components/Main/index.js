import React from 'react'

import './Main.css'

import { Hero } from '../Hero';
import { About } from '../About';
import { Features } from '../Features';
import { Catering } from '../Catering';
import { Contact } from '../Contact';


export const Main = () => {
      return (
            <div>
                  <Hero />
                  <About />
                  <Features />
                  <Catering />
                  <Contact />
            </div>
      )
}
