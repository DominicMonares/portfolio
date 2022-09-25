import React from 'react';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import Demo from './Demo';

const Application = (props) => {
  const app = props.app;
  return (
    <div className="app_container">
      <Header
        title={app.title}
        est={app.desc}
        links={app.links}
        techs={app.techs}
      />
      <SubHeader desc={app.techs} />
      {app.demos.map(demo => <Demo demo={demo} />)}
    </div>

  );
}

export default Application;
