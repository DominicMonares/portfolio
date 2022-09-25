import React from 'react';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
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
      {app ? <SubHeader desc={app.desc} links={app.links} /> : <></>}
      {bullets ? <Bullets bullets={bullets} /> : <></>}
    </div>
  );
}

export default Job;
