import React from 'react'

import './Features.css'

import foodsDb from '../../assets/db/foods.json';

export const Features = () => {
      return (
            <div id="menu" className="foods section">
                  <h2 className="foods__title section__title">Menú</h2>
                  
                  <div className="container">
                        <div className="foods-flex">
                              {
                                    foodsDb.map(food => (
                                          food.isTest && (
                                                <div className="food-card" key={food.id}>
                                                      <img className="food-card__img" src={food.imgUrl} alt="" />
                                                      <div className="food-card__body">
                                                            <h2 className="food-card__title">{food.title}</h2>
                                                            <p className="food-card__description">{food.description}</p>
                                                            <span className="food-card__price">₡{food.price}</span>
                                                      </div>
                                                </div>
                                          )
                                    ))
                              }
                        </div>
                  </div>
            </div>
      )
}
