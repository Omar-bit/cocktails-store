import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <object data={logo} className='logo'></object>
      <ul className='nav'>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
