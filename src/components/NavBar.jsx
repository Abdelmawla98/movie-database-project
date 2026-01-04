import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to="/">Movie app</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className='navbar-link'>Home</Link>
            <Link to="/Favourites" className='navbar-link'>Favourites</Link>
        </div>
    </nav>
  )
}

export default NavBar