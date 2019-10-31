import React from 'react'
import '../App.css'

const Navigation = () => {
  return (
    <container className="nav-bar">
      <div className="nav-item">
        <a href="/" className="nav-link">
          Home
        </a>
      </div>
      <div className="nav-item">
        <a href="/about" className="nav-link">
          About
        </a>
      </div>
      <div className="nav-item">
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </container>
  )
}

export default Navigation
