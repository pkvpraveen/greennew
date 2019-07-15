import React from 'react'

import logo from '../assets/images/Logo.jpg';

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo"><img src={logo} alt=""/></span>
    <h1>Get in Touch</h1>
    <p><a href='tel:+919446605978'>+91 9446605978 </a></p>
    <p><a href='mailto:greeninnovationsinfo@gmail.com'>greeninnovationsinfo@gmail.com</a></p>
  </header>
)

export default Header
