import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Navbar() {
  const navLinkStyle= ({isActive})=>{
    return {
      fontWeight: isActive ? 'bold': 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }
  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>
      <NavLink style={navLinkStyle} to={'/about'}>About</NavLink>
      <NavLink style={navLinkStyle} to={'/product'}>Product</NavLink>
    </nav>
  )
}

export default Navbar
