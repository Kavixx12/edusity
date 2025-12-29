import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/graduation-hat.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return (
    <nav className = {`container ${sticky ? 'dark-nav' : ''}`}>
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
