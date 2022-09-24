import React from 'react';

import Header from './Header';
import Application from './Application';
import Bullets from './Bullets';

const Job = ({ job }) => {
  const app = job.app;
  const bullets = job.bullets;
  return (
    <div className="job_container">
      <Header
        title={job.title}
        company={job.company}
        location={job.location}
        year={job.year}
      />
      {app ? <Application type={app.type} links={app.github} /> : <></>}
      <Bullets
        first={bullets.first}
        second={bullets.second}
        third={bullets.third}
      />
    </div>
  );
}

export default Job;
