import React from 'react';

import Header from './Header';
import Application from './Application';
import Bullets from './Bullets';

const Job = (props) => {
  const job = props.job;
  const currentApp = () => {
    if (job.app) {
      const current = job.app;
      return <Application type={current.type} links={current.github} />
    }

    return <></>
  }

  const bullets = job.bullets;
  return (
    <div className="job_container">
      <Header
        title={job.title}
        company={job.company}
        location={job.location}
        year={job.year}
      />
      {currentApp()}
      <Bullets
        first={bullets.first}
        second={bullets.second}
        third={bullets.third}
      />
    </div>
  )
}

export default Job;
