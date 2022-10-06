import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import navigation from '../../../../data/navigation';
import './Dropdown.css';

const Dropdown = () => {
  const location = useLocation();
  const tabs = {};
  navigation.forEach(p => {
    p.route === location.pathname ? tabs[p.page] = 'dd_tab_active' : tabs[p.page] = 'dd_tab';
  });

  const [activeTab, setActiveTab] = useState(tabs);
  const [ddOpen, setDdOpen] = useState(false);

  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      if (t === tab) {
        currentTabs[t] = 'dd_tab_active';
      } else {
        currentTabs[t] = 'dd_tab';
      }
    }

    setActiveTab(currentTabs);
  }

  return (
    <div className='dropdown_container'>
      <div className=''>
        <button type='button'>

        </button>
        <div className={ddOpen ? 'dd_open' : 'dd_closed'}>
          {navigation.map(p => {
            return (
              <NavLink to={p.route} className={activeTab[p.page]} onClick={() => updateTabs(p.page)}>
                <div className=''>{p.page}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className='header_underline'></div>
    </div>
  );
}

export default Dropdown;
