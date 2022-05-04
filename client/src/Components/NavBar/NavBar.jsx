import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <div>
      <h1 className="title_main">Dominic Monares</h1>
      <h3 className="subtitle_main">Full-Stack Software Engineer</h3>
      <div className="navbar">
        <Nav>
          <NavMenu>
            <NavLink to="/about">
              About
            </NavLink>
            <div className="divider"></div>
            <NavLink to="/skills">
              Skills
            </NavLink>
            <div className="divider"></div>
            <NavLink to="/experience">
              Experience
            </NavLink>
            <div className="divider"></div>
            <NavLink to="/education">
              Education
            </NavLink>
            <div className="divider"></div>
            <NavLink to="/applications">
              Applications
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </div>
  )
}

export default NavBar;
