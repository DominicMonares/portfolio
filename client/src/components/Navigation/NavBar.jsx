import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';
import './Navigation.css';

const NavBar = () => {
  const [navData, setNavData] = useState([]);
  const [tabs, setTabs] = useState({});

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => await fetch('/data/nav');
    fetchData()
      .then(async res => {
        const data = await res.json();
        const tabData = {};
        data.forEach(p => {
          p.route === location.pathname
            ? tabData[p.page] = '-active'
            : tabData[p.page] = '';
        });
        setNavData(data);
        setTabs(tabData);
      })
      .catch(err => { throw err })
  }, []);

  const updateTabs = (tab) => {
    const currentTabs = { ...tabs };
    for (const t in currentTabs) {
      t === tab ? currentTabs[t] = '-active' : currentTabs[t] = '';
    }
    
    setTabs(currentTabs);
  }

  return (
    <div className='nav-container'>
      <div className='nav-menu'>
        {navData.map(n => (
          <NavLink
            to={n.route}
            className={'nav-tab'.concat(tabs[n.page])}
            onClick={() => updateTabs(n.page)}
          >
            <div className='nav-text'>{n.page}</div>
          </NavLink>
        ))}
      </div>
      <div className='header-underline'></div>
    </div>
  );
}

export default NavBar;
