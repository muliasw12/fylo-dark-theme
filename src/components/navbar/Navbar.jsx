import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt='logo'/>
        <div className='links'>
            <p><a href="#features">Features</a></p>
            <p><a href="#team">Team</a></p>
            <p><a href="#signIn">Sign In</a></p>
        </div>
    </nav>
  )
}

export default Navbar
