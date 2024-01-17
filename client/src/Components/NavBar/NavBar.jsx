import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import navigation from '../../../../data/navigation';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const tabs = {};
  navigation.forEach(p => {
    p.route === location.pathname ? tabs[p.page] = 'nav-tab-active' : tabs[p.page] = 'nav-tab';
  });

  const [activeTab, setActiveTab] = useState(tabs);

  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      if (t === tab) {
        currentTabs[t] = 'nav-tab-active';
      } else {
        currentTabs[t] = 'nav-tab';
      }
    }

    setActiveTab(currentTabs);
  }

  return (
    <div className='nav-container'>
      <div className='nav-menu'>
        <span className=''>
          <NavLink
            to={'/apps'}
            className={activeTab['Apps']}
            onClick={() => updateTabs('Apps')}
          >
            <div className='nav-text'>Applications</div>
          </NavLink>
        </span>
        <span className=''>
          <NavLink
            to={'/skills'}
            className={activeTab['Skills']}
            onClick={() => updateTabs('Skills')}
          >
            <div className='nav-text'>Skills</div>
          </NavLink>
        </span>
        <span className=''>
          <NavLink
            to={'/experience'}
            className={activeTab['Experience']}
            onClick={() => updateTabs('Experience')}
          >
            <div className='nav-text'>Experience</div>
          </NavLink>
        </span>
        <span className=''>
          <NavLink
            to={'/education'}
            className={activeTab['Education']}
            onClick={() => updateTabs('Education')}
          >
            <div className='nav-text'>Education</div>
          </NavLink>
        </span>
        <span className=''>
          <NavLink
            to={'/about'}
            className={activeTab['About']}
            onClick={() => updateTabs('About')}
          >
            <div className='nav-text'>About</div>
          </NavLink>
        </span>
      </div>
      <div className='header-underline'></div>
    </div>
  );
}

export default NavBar;
