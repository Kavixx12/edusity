import React from 'react'
import './Navbar.css'
import logo from '../../assets/graduation-hat.png'

const Navbar = () => {
  return (
    <nav class = 'container'>
      <img src={logo} class = "logo" alt="logo"/>
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Tsetimonials</li>
        <li><button class = 'btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
