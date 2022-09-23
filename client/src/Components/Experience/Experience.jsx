import React from 'react';

import Job from './Job';
import experience from '../../../../data/experience';

const Experience = () => {
  return (
    <div className="experience_container">
      {experience.map(j => <Job key={j.title} job={j} />)}
    </div>
  )
}

export default Experience;
