import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navigation = () => {
  return (
    <container className="nav-bar">
      <div className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </container>
  )
}

export default Navigation
