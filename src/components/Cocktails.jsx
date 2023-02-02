import React from 'react'
import Cocktail from './Cocktail'
function Cocktails(props) {
  if (props.shownCocktails.drinks && props.shownCocktails.drinks.length > 0) {
    return (
      <div className='cocktails-section'>
        <h2>Cocktails</h2>
        <div className='cocktails-container'>
          {props.shownCocktails.drinks.map((c, index) => (
            <Cocktail key={index} {...c} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className='cocktails-section'>
      <h2>Cocktails</h2>
      <div className='cocktails-container'> </div>
    </div>
  )
}
export default Cocktails
