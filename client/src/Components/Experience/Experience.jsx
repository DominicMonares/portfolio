import React from 'react';

import Job from './Job';
import exp from './exp.js';
const jobs = exp.jobs;

const Experience = () => {
  return (
    <div className="experience_container">
      {jobs.map(j => <Job key={j.title} job={j} />)}
    </div>
  )
}

export default Experience;
