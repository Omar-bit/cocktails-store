import React from 'react'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import CocktailDetails from './pages/CocktailDetails'
//http://localhost:5173/
//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 grab cocktail by id
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s= grab all cocktails
//
function App() {
  const [cocktails, setCocktails] = React.useState({})
  const [shownCocktails, setShownCocktails] = React.useState({})
  const [cocktailName, setCocktailName] = React.useState('')
  function handleNameChange(e) {
    e.preventDefault()
    setCocktailName(e.target.value)
  }
  React.useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data)
        console.log(data)
      })
  }, [])
  React.useEffect(() => {
    setShownCocktails(cocktails)
  }, [cocktails])
  React.useEffect(() => {
    if (cocktailName == '') return
    let newCocktails = []
    for (let i = 0; i < cocktails.drinks.length; i++) {
      if (
        cocktails.drinks[i].strDrink
          .toUpperCase()
          .includes(cocktailName.toUpperCase())
      ) {
        newCocktails.push(cocktails.drinks[i])
      }
    }
    setShownCocktails({ drinks: newCocktails })
  }, [cocktailName])
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              handleNameChange={handleNameChange}
              shownCocktails={shownCocktails}
            />
          }
        />
        <Route path='/about' element={<About cocktailName={cocktailName} />} />
        <Route path='/cocktails/:idDrink' element={<CocktailDetails />} />
        <Route path='/*' element={<>error page no founded</>} />
      </Routes>
    </>
  )
}

export default App
