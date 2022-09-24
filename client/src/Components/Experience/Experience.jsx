import React from 'react';

import Job from './Job';
import experience from '../../../../data/experience';

const Experience = () => {
  return (
    <div className="experience_container">
      {experience.map(job => <Job job={job} />)}
    </div>
  );
}

export default Experience;
