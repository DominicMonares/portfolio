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
          <NavLink to={'/apps'} className={activeTab['Apps']} onClick={() => updateTabs('Apps')}>
            <div className='nav-text'>Applications</div>
          </NavLink>
        </span>
        <span className=''>
          <NavLink to={'/skills'} className={activeTab['Skills']} onClick={() => updateTabs('Skills')}>
            <div className='nav-text'>Skills</div>
          </NavLink>
        </span>
      </div>
      <div className='header-underline'></div>
    </div>
  );
}

export default NavBar;
