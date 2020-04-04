import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <p className="navbar-brand" >PokeDesk</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>


  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
        <Link className="nav-item nav-link mr-5" to="/pokedesk">Home</Link>
        <Link className="nav-item nav-link" to="/pokedesk/aboutme">About Me</Link>
    </ul>
  </div>
  </div>
</nav>
</div>
    )
}

export default Nav
