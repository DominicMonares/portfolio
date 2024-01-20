import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Dropdown from './Components/Dropdown';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Applications from './Components/Applications';
import './App.css';

const App = () => {
  // const isWide = () =>  window.innerWidth >= 790 ? true : false;
  const isWide = () =>  window.innerWidth >= 790 ? true : true;
  const [wide, setWide] = useState(isWide());

  useEffect(() => {
    const handleWidthChange = () => setWide(isWide());
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  return (
    <div id={wide ? 'w-app' : 'm-app'}>
      <h1 className={wide ? 'w-title' : 'm-title'}>Dominic Monares</h1>
      <h3 className={wide ? 'w-subtitle' : 'm-subtitle'}>Full-Stack Software Engineer</h3>
      <Router>
        {wide ? <NavBar /> : <Dropdown />}
        <div className="route-container">
          <Routes>
            <Route path='/apps' element={<Applications wide={wide} />}></Route>
            <Route path='/about' element={<About wide={wide} />}></Route>
            <Route path='/skills' element={<Skills wide={wide} />}></Route>
            <Route path='/experience' element={<Experience wide={wide} />}></Route>
            <Route path='/education' element={<Education wide={wide} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
