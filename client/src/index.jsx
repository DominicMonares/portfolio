import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Dropdown from './Components/Dropdown/Dropdown';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Applications from './Components/Applications/Applications';
import './App.css';

const App = () => {
  const isWide = () =>  window.innerWidth >= 790 ? true : false;
  const [wide, setWide] = useState(isWide());

  useEffect(() => {
    const handleWidthChange = () => setWide(isWide());
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  return (
    <div id={wide ? 'w_app' : 'm_app'}>
      <h1 className={wide ? 'w_title' : 'm_title'}>Dominic Monares</h1>
      <h3 className={wide ? 'w_subtitle' : 'm_subtitle'}>Full-Stack Software Engineer</h3>
      <Router>
        {wide ? <NavBar /> : <Dropdown />}
        <Routes>
          <Route path='/apps' element={<Applications wide={wide} />}></Route>
          <Route path='/about' element={<About wide={wide} />}></Route>
          <Route path='/skills' element={<Skills wide={wide} />}></Route>
          <Route path='/experience' element={<Experience wide={wide} />}></Route>
          <Route path='/education' element={<Education wide={wide} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
