import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/quiz1">
          <li>Quiz 1</li>
        </Link>
        <Link to="/quiz2">
          <li>Quiz 2</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header