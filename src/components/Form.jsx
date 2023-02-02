import React from 'react'
function Form(props) {
  const inputElement = React.useRef()

  React.useEffect(() => {
    inputElement.current.focus()
    console.log(inputElement)
  }, [])
  return (
    <form>
      <label htmlFor='inpt'>Search Your Favorite Cocktail</label>
      <input
        ref={inputElement}
        type='text'
        name='inpt'
        value={props.cocktailName}
        onChange={(e) => props.handleNameChange(e)}
      />
    </form>
  )
}
export default Form
