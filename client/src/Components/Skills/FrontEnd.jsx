import React from 'react';

import js from '../../../../assets/icons8-javascript-48.png';
import html5 from '../../../../assets/icons8-html-5-48.png';
import css3 from '../../../../assets/icons8-css3-48.png';
import react from '../../../../assets/icons8-react-40.png';
import redux from '../../../../assets/icons8-redux-48.png';
import webAudio from '../../../../assets/icons8-audio-40.png';

const FrontEnd = () => {
  return (
    <div className="frontend_container">
      <span className="skill_title">Front-End</span>
      <div className="skill_container">
        <div className="tool">
          <span className="tool_text">{'Javascript (ES5 & ES6)'}</span>
          <img src={js} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">HTML5</span>
          <img src={html5} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">CSS3</span>
          <img src={css3} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">React</span>
          <img src={react} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">React Native</span>
          <img src={react} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">Web Audio API</span>
          <img src={webAudio} width="46px" height="46px" />
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
