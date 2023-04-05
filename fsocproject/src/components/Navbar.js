import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

export default function navbar() {
  return (
    <div className='navbar'>
      <ul className ="nav-menu">

        <Link to ="/SignUp">
        <li>Sign Up</li>
        </Link>
        <Link to ="/SignIn">
        <li>Sign In</li>
        </Link>

      </ul>
    </div>
  )
}