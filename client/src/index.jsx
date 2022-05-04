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
    <Router>
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/applications' element={<Applications />}></Route>
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
