import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Dropdown = ({ navData }) => {
  let currentTab;
  const location = useLocation();
  const route = location.pathname;
  const menu = navData.filter(p => {
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
    <div className='dropdown-container'>
      <div
        className='dd-button'
        onClick={() => ddOpen ? setDdOpen(false) : setDdOpen(true)}
      >
        {activeTab}
      </div>
      <div className={ddOpen ? 'dd-open' : 'dd-closed'}>
        {menu.map(p => {
          return (
            <NavLink
              to={p.route}
              className='dd-page'
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
