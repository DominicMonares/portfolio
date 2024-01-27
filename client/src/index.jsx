import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Applications from './components/Applications';
import './App.css';

const App = () => {
  const isSmallWindow = () =>  window.innerWidth < 790 ? true : false;
  const [smallWindow, setSmallWindow] = useState(isSmallWindow());

  useEffect(() => {
    const handleWidthChange = () => setSmallWindow(isSmallWindow());
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  return (
    <div id={smallWindow ? 'app' : 'sw-app'}>
      <h1 className={smallWindow ? 'title' : 'sw-title'}>
        Dominic Monares
      </h1>
      <h3 className={smallWindow ? 'subtitle' : 'sw-subtitle'}>
        Full-Stack Software Engineer
      </h3>
      <Router>
        {smallWindow ? <NavBar /> : <Dropdown />}
        <div className="route-container">
          <Routes>
            <Route path='/apps' element={<Applications smallWindow={smallWindow} />}></Route>
            <Route path='/about' element={<About smallWindow={smallWindow} />}></Route>
            <Route path='/skills' element={<Skills smallWindow={smallWindow} />}></Route>
            <Route path='/experience' element={<Experience smallWindow={smallWindow} />}></Route>
            <Route path='/education' element={<Education smallWindow={smallWindow} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
