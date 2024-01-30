import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import navigation from '../../../../data/navigation';
import './Navigation.css';

const Dropdown = () => {
  let currentTab;
  const location = useLocation();
  const route = location.pathname;
  const menu = navigation.filter(p => {
    if (p.route === route) {
      currentTab = p.page;
      return false;
    } else {
      return true;
    }
  });

  const [activeTab, setActiveTab] = useState(currentTab);
  const [ddOpen, setDdOpen] = useState(false);

  return (
    <div className='dropdown_container'>
      <div
        className='dd_button'
        onClick={() => ddOpen ? setDdOpen(false) : setDdOpen(true)}
      >
        {activeTab}
      </div>
      <div className={ddOpen ? 'dd_open' : 'dd_closed'}>
        {menu.map(p => {
          return (
            <NavLink
              to={p.route}
              className='dd_page'
              onClick={() => {
                setActiveTab(p.page);
                setDdOpen(false);
              }}
            >
              {p.page}
            </NavLink>
          );
        })}
      </div>

    </div>
  );
}

export default Dropdown;
