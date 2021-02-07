import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(){
  return(
    <section className="container notFound">
        <h1 className="titleNotfound">ERREUR 404</h1>
        <Link to="/" className="notFoundLink">
          <h1>Retourner a l'accueil</h1>
        </Link>
    </section>
  )
}

export default NotFound