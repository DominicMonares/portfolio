import React from 'react';

import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import TestDeploy from './TestDeploy';
import Development from './Development';
import Office from './Office';
import Media from './Media';
import Icons from './Icons';

const Skills = () => {
  return (
    <div className="skills_container">
      <FrontEnd />
      <BackEnd />
      <TestDeploy />
      <Development />
      <Office />
      <Media />
      <Icons />
    </div>
  );
}

export default Skills;
