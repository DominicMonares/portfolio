import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <div>
      <h2>Dominic Monares</h2>
      <h4>Full-Stack Software Engineer</h4>
      <Nav>
        <NavMenu>
          <NavLink to="/about">
            About
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
          <NavLink to="/applications">
            Applications
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
}

export default NavBar;
