import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import navigation from '../../../../data/navigation';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const tabs = {};
  navigation.forEach(p => {
    p.route === location.pathname ? tabs[p.page] = '-active' : tabs[p.page] = '';
  });

  const [active, setActive] = useState(tabs);

  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      if (t === tab) {
        currentTabs[t] = '-active';
      } else {
        currentTabs[t] = '';
      }
    }

    setActive(currentTabs);
  }

  // <span className="tab-curve tab-1-curve-left"></span>
  // <span className={'tab-square'.concat(' tab-1-square-left', active['Apps'])}></span>
  return (
    <div className='nav-container'>
      <div className='nav-menu'>
        <NavLink
          to={'/apps'}
          className={'nav-tab'.concat(active['Apps'], ' tab-1')}
          onClick={() => updateTabs('Apps')}
        >
          <div className='nav-text'>Applications</div>
        </NavLink>
        <NavLink
          to={'/skills'}
          className={'nav-tab'.concat(active['Skills'], ' tab-2')}
          onClick={() => updateTabs('Skills')}
        >
          <div className='nav-text'>Skills</div>
        </NavLink>
        <NavLink
          to={'/experience'}
          className={'nav-tab'.concat(active['Experience'], ' tab-3')}
          onClick={() => updateTabs('Experience')}
        >
          <div className='nav-text'>Experience</div>
        </NavLink>
        <NavLink
          to={'/education'}
          className={'nav-tab'.concat(active['Education'], ' tab-4')}
          onClick={() => updateTabs('Education')}
        >
          <div className='nav-text'>Education</div>
        </NavLink>
        <NavLink
          to={'/about'}
          className={'nav-tab'.concat(active['About'], ' tab-5')}
          onClick={() => updateTabs('About')}
        >
          <div className='nav-text'>About</div>
        </NavLink>
      </div>
      <div className='header-underline'></div>
    </div>
  );
}

export default NavBar;
