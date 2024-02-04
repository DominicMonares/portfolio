import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';
import NavBar from './components/Navigation/NavBar';
import Dropdown from './components/Navigation/Dropdown';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Applications from './components/Applications';
import './App.css';

const App = () => {
  // Change styling depending on window size
  const isSmallWindow = () =>  window.innerWidth < 790 ? 'sw-' : '';
  const [swClass, setSWClass] = useState(isSmallWindow());
  useEffect(() => {
    const handleWidthChange = () => setSWClass(isSmallWindow());
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  // Fetch tab navigation data
  const [navData, setNavData] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/nav');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setNavData(data);
      })
      .catch(err => { throw err });
  }, []);

  return (
    <div id={swClass.concat('app')}>
      <h1 className={swClass.concat('main-title')}>Dominic Monares</h1>
      <h3 className={swClass.concat('main-subtitle')}>Full-Stack Software Engineer</h3>
      <Router>
        {isSmallWindow() ? <Dropdown navData={navData} /> : <NavBar navData={navData} />}
        <div className="route-container">
          <Routes>
            <Route path="/apps" element={<Applications swClass={swClass} />} />
            <Route path="/about" element={<About swClass={swClass} />} />
            <Route path="/skills" element={<Skills swClass={swClass} />} />
            <Route path="/experience" element={<Experience swClass={swClass} />} />
            <Route path="/education" element={<Education swClass={swClass} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
