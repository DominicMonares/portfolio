import React from 'react';

import vim from '../../../../assets/vim.png';
import git from '../../../../assets/git.png';
import npm from '../../../../assets/icons8-npm-48.png';
import jquery from '../../../../assets/jquery.png';
import axios from '../../../../assets/axios.png';
import webpack from '../../../../assets/webpack.png';
import babel from '../../../../assets/icons8-babel-64.png';
import agile from '../../../../assets/icons8-agile-64.png';
import tdd from '../../../../assets/icons8-testing-64.png';
import expo from '../../../../assets/expo.png';
import trello from '../../../../assets/trello.png';
import figma from '../../../../assets/icons8-figma-48.png';

const Development = () => {
  return (
    <div className="dev_container">
      <span className="skill_title">Development</span>
      <div className="skill_container">
        <div className="tool">
          <span className="tool_text">Vim</span>
          <img src={vim} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">Git</span>
          <img src={git} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">npm</span>
          <img src={npm} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">jQuery</span>
          <img src={jquery} width="46x" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">Axios</span>
          <img src={axios} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">webpack</span>
          <img src={webpack} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">Babel</span>
          <img src={babel} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">Agile Methodology</span>
          <img src={agile} width="48px" height="48px" />
        </div>
      </div>
      <div className="skill_container_lower">
        <div className="tool">
          <span className="tool_text">Test-Driven Development</span>
          <img src={tdd} width="50px" height="50px" />
        </div>
        <div className="tool">
          <span className="tool_text">Expo</span>
          <img src={expo} width="44px" height="44px" />
        </div>
        <div className="tool">
          <span className="tool_text">Trello</span>
          <img src={trello} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">Figma</span>
          <img src={figma} width="48px" height="48px" />
        </div>
      </div>
    </div>
  );
}

export default Development;
