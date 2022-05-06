import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <div className="nav_container">
      <h1 className="title_main">Dominic Monares</h1>
      <h3 className="subtitle_main">Full-Stack Software Engineer</h3>
      <div className="navbar">
        <Nav>
          <NavMenu>
            <NavLink to="/applications">
              Applications
            </NavLink>
            <NavLink to="/skills">
              Skills
            </NavLink>
            <NavLink to="/experience">
              Experience
            </NavLink>
            <NavLink to="/education">
              Education
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
      <div className="header_underline"></div>
    </div>
  )
}

export default NavBar;
