import React from 'react';
import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import Bullets from '../Shared/Bullets';

const Job = ({ swClass, job }) => {
  const app = job.app;
  const bullets = job.bullets;
  return (
    <div className={swClass.concat('job')}>
      <Header
        swClass={swClass}
        title={job.title}
        est={job.est}
        location={job.location}
        year={job.year}
      />
      {app ? (
        <SubHeader
          swClass={swClass}
          desc={app.desc}
          links={app.links}
        />
      ) : (
        <span />
      )}
      {bullets ? (
        <Bullets swClass={swClass} bullets={bullets} />
      ) : (
        <span />
      )}
    </div>
  );
}

export default Job;
