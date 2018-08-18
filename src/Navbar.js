import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'

class Navbar extends Component {

  render() {

    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    }

    const navbar = {
      padding: '20px',
    }

    return (
      <div style={navbar}>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>

        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>

        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Login</NavLink>

      </div>
    )
  }
}

export default Navbar
