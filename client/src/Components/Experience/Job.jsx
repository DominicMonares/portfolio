import React from 'react';

import Application from './Application';
import Header from '../Shared/Header';
import Bullets from '../Shared/Bullets';

const Job = ({ job }) => {
  const app = job.app;
  const bullets = job.bullets;
  return (
    <div className="job_container">
      <Header
        title={job.title}
        est={job.est}
        location={job.location}
        year={job.year}
      />
      {app ? <Application type={app.type} links={app.github} /> : <></>}
      {bullets ? <Bullets bullets={bullets} /> : <></>}
    </div>
  );
}

export default Job;
