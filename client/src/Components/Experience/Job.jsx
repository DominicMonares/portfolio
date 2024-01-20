import React from 'react';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import Bullets from '../Shared/Bullets';

const Job = ({ wide, job }) => {
  const app = job.app;
  const bullets = job.bullets;
  return (
    <div className="job-container">
      <Header
        wide={wide}
        title={job.title}
        est={job.est}
        location={job.location}
        year={job.year}
      />
      {app ? <SubHeader wide={wide} desc={app.desc} links={app.links} /> : <></>}
      {bullets ? <Bullets wide={wide} bullets={bullets} /> : <></>}
    </div>
  );
}

export default Job;
