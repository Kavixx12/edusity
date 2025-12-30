import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className = 'hero container' id='Hero'>
        <div className="hero-text">
        <h1>Unlock Your Future with Quality Education</h1>
        <p>Learn anytime, anywhere. Explore industry-focused courses, expert-led lessons, and hands-on skill development designed for your real-world success.</p>
        <button class = 'btn'>Get Started<img src = {arrow}/></button>
    </div>
    </div>
  )
}

export default Hero
