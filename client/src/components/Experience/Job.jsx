import React from 'react';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import Bullets from '../Shared/Bullets';

const Job = ({ swClass, job }) => {
  const app = job.app;
  const bullets = job.bullets;
  return (
    <div className="job-container">
      <Header
        swClass={swClass}
        title={job.title}
        est={job.est}
        location={job.location}
        year={job.year}
      />
      {app ? <SubHeader swClass={swClass} desc={app.desc} links={app.links} /> : <></>}
      {bullets ? <Bullets swClass={swClass} bullets={bullets} /> : <></>}
    </div>
  );
}

export default Job;
