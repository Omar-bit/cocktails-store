import React from 'react'
import { Link } from 'react-router-dom'
export default function cocktail(props) {
  return (
    <div className='cocktail-card'>
      <img src={props.strDrinkThumb} />
      <div className='details'>
        <h4 className='cocktail-name'>{props.strDrink}</h4>
        <h6 className='cocktail-family'>{props.strGlass}</h6>
        <span className='cocktail-Alcoholic'>{props.strAlcoholic}</span>
        <Link to={'/cocktails/' + props.idDrink}>
          <button>DETAILS</button>
        </Link>
      </div>
    </div>
  )
}
