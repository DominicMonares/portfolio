import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Dropdown = ({ navData }) => {
  // Find current page
  const location = useLocation();

  // Set menu and active tab data
  const [menu, setMenu] = useState([]);
  const [activeTab, setActiveTab] = useState('Loading...');
  useEffect(() => {
    setMenu(navData.filter(p => {
      if (p.route === location.pathname) {
        setActiveTab(p.page);
        return false;
      } else {
        return true;
      }
    }))
  }), [];

  // Open and close the dropdown menu
  const [ddOpen, setDdOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={() => setDdOpen(!ddOpen)}
      >
        {activeTab}
      </button>
      <div className="dropdown-body">
        <div
          className={'dropdown-nav-container'.concat(
            ddOpen ? '-open' : '-closed'
          )}
        >
          {menu.map((p, i) => (
            <NavLink
              to={p.route}
              className="dropdown-navlink"
              onClick={() => {
                setActiveTab(p.page);
                setDdOpen(false);
              }}
            >
              {p.page}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
