import React from 'react';

import Job from './Job';
import experience from '../../../../data/experience';
import './Experience.css';

export default Experience = ({ wide }) => {
  return (
    <div className={wide ? 'w_experience_container' : 'm_experience_container'}>
      {experience.map(job => <Job wide={wide} job={job} />)}
    </div>
  );
}
