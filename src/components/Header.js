import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Quiz1">
          <li>Quiz n°1</li>
        </Link>
        <Link to="/Quiz2">
          <li>Quiz n°2</li>
        </Link>
        <Link to="/Quiz3">
          <li>Quiz n°3</li>
        </Link>
        <Link to="/Quiz4">
          <li>Quiz n°4</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header