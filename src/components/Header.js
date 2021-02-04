import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/quizz1">
          <li>Quizz 1</li>
        </Link>
        <Link to="/quizz2">
          <li>Quizz 2</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header