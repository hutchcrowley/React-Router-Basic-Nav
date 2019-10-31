import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <>
      <div className="nav-bar">
        <Navigation />
      </div>
      <div className="wrapper-main">
        <div>
          <h1>React Router Project</h1>
          <div className="component-display">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
