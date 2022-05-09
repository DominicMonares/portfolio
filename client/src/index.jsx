import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Applications from './Components/Applications/Applications';

import './App.css';

const App = () => {
  return (
    <div id="app">
      <h1 className="title_main">Dominic Monares</h1>
      <h3 className="subtitle_main">Full-Stack Software Engineer</h3>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/apps' element={<Applications />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/education' element={<Education />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
