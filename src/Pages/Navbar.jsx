import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    
      
        <div className="navbar-wrapper">
          
          <Link to="/"><div className='our-logo'></div></Link>
          

          <div className='navbar-cont'>
        <nav className="navbar">

        <Link to="/menu" className="menu">
        <div className='menu-logo'></div>
        MENU
        </Link>

        <Link to="/" className="home">
        HOME
        </Link>

        <Link to="/cart" className="cart">
        <div className='cart-logo'></div>
        CART
        </Link>
        

        </nav>
          </div>

          <div className='blank'></div>
        
        </div>
            

      

  )
}

export default Navbar
