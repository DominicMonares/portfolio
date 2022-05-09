import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <div className="nav_container">
      <div className="navbar">
        <Nav>
          <NavMenu>
            <NavLink to="/apps" className="navlink">
              <div className="nav_text">
                Apps
              </div>
            </NavLink>
            <NavLink to="/skills" className="navlink">
              <div className="nav_text">
                Skills
              </div>
            </NavLink>
            <NavLink to="/experience" className="navlink">
              <div className="nav_text">
                Experience
              </div>
            </NavLink>
            <NavLink to="/education" className="navlink">
              <div className="nav_text">
                Education
              </div>
            </NavLink>
            <NavLink to="/about" className="navlink">
              <div className="nav_text">
                About
              </div>
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
      <div className="header_underline"></div>
    </div>
  )
}

export default NavBar;
