import React from 'react'
import { useParams, Link } from 'react-router-dom'
export default function Cocktail() {
  const [cocktailDetails, setCocktailDetails] = React.useState({})
  let idDrink = useParams().idDrink
  React.useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink)
      .then((res) => res.json())
      .then((data) => {
        setCocktailDetails(data.drinks[0])
        console.log(data.drinks[0])
      })
  }, [])
  //{cocktailDetails.strDrink}
  return (
    <div className='cocktail-details-container'>
      <Link className='link' to={'/'}>
        <button>Back Home</button>
      </Link>
      <h2>{cocktailDetails.strDrink}</h2>
      <div className='cocktail-details'>
        <img src={cocktailDetails.strDrinkThumb} />
        <div className='details'>
          <h3>
            <span className='prop'>Name :</span>
            {cocktailDetails.strDrink}
          </h3>
          <h3>
            <span className='prop'>Category :</span>
            {cocktailDetails.strCategory}
          </h3>
          <h3>
            <span className='prop'>Info :</span>
            {cocktailDetails.strGlass}
          </h3>
          <h3>
            <span className='prop'>Glass :</span>
            {cocktailDetails.strGlass}
          </h3>
          <h3>
            <span className='prop'>Instructons :</span>
            {cocktailDetails.strInstructions}
          </h3>
          <h3>
            <span className='prop'>Ingredients :</span>
            {cocktailDetails.strIngredient1 +
              ' ' +
              cocktailDetails.strIngredient2 +
              ' ' +
              cocktailDetails.strIngredient3 +
              ' ' +
              cocktailDetails.strIngredient4}
          </h3>
        </div>
      </div>
    </div>
  )
}
