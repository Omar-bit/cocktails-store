import React from 'react'
import Form from '../components/Form'
import Cocktails from '../components/Cocktails'
function Home(props) {
  return (
    <>
      <Form
        cocktailName={props.cocktailName}
        handleNameChange={props.handleNameChange}
      />
      <Cocktails shownCocktails={props.shownCocktails} />
    </>
  )
}
export default Home
