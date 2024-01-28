import React from 'react';

import Job from './Job';
import experience from '../../../../data/experience.json';
import './Experience.css';

const Experience = ({ swClass }) => {
  return (
    <div className={swClass.concat('experience-container')}>
      {experience.map(job => <Job swClass={swClass} job={job} />)}
    </div>
  );
}

export default Experience;
