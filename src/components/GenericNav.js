import React from 'react'
import {Link} from 'gatsby'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Link to='/'>Go back to home</Link>
  </nav>
)

export default Nav
