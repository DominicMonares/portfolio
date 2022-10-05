import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import navigation from '../../../../data/navigation';
import './NavBar.css';

const NavBar = () => {
  const tabs = {};
  navigation.forEach(p => p.page === 'Apps' ? tabs[p.page] = 'tab_active' : tabs[p.page] = 'tab');
  const [activeTab, setActiveTab] = useState(tabs);

  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      if (t === tab) {
        currentTabs[t] = 'tab_active';
      } else {
        currentTabs[t] = 'tab';
      }
    }

    setActiveTab(currentTabs);
  }

  return (
    <div className="nav_container">
      <div className="nav_menu">
        {navigation.map(p => {
          return (
            <NavLink to={p.route} className={activeTab[p.page]} onClick={() => updateTabs(p.page)}>
              <div className='nav_text'>{p.page}</div>
            </NavLink>
          );
        })}
      </div>
      <div className="header_underline"></div>
    </div>
  );
}

export default NavBar;
