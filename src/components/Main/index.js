import React from 'react'

import './Main.css'

import { Hero } from '../Hero';
import { Features } from '../Features';
import { About } from '../About';


export const Main = () => {
      return (
            <div>
                  <Hero />
                  <About />
                  <Features />
            </div>
      )
}
