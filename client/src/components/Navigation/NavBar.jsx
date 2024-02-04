import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const NavBar = ({ navData }) => {
  // Find current page
  const location = useLocation();

  // Set initial page
  const [tabs, setTabs] = useState({});
  useEffect(() => {
    const tabData = {};
    navData.forEach(p => {
      p.route === location.pathname
        ? tabData[p.page] = '-active'
        : tabData[p.page] = '';
    });
    setTabs(tabData);
  });

  // Update current page
  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      t === tab ? currentTabs[t] = '-active' : currentTabs[t] = '';
    }
    setTabs(currentTabs);
  }

  return (
    <div className="nav-container">
      <div className="nav-menu">
        {navData.map(n => (
          <NavLink
            to={n.route}
            className={'nav-tab'.concat(tabs[n.page])}
            onClick={() => updateTabs(n.page)}
          >
            <div className="nav-text">{n.page}</div>
          </NavLink>
        ))}
      </div>
      <div className="header-underline" />
    </div>
  );
}

export default NavBar;
