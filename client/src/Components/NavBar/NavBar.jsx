import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <div>
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
