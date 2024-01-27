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
  const isSmallWindow = () =>  window.innerWidth < 790 ? 'sw-' : '';
  const [swClass, setSWClass] = useState(isSmallWindow());

  useEffect(() => {
    const handleWidthChange = () => setSWClass(isSmallWindow());
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  return (
    <div id={swClass.concat('app')}>
      <h1 className={swClass.concat('title')}>Dominic Monares</h1>
      <h3 className={swClass.concat('subtitle')}>Full-Stack Software Engineer</h3>
      <Router>
        {isSmallWindow() ? <Dropdown /> : <NavBar />}
        <div className="route-container">
          <Routes>
            <Route path='/apps' element={<Applications swClass={swClass} />}></Route>
            <Route path='/about' element={<About swClass={swClass} />}></Route>
            <Route path='/skills' element={<Skills swClass={swClass} />}></Route>
            <Route path='/experience' element={<Experience swClass={swClass} />}></Route>
            <Route path='/education' element={<Education swClass={swClass} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
