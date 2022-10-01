import React from 'react';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import Demo from './Demo';

const Application = (props) => {
  const app = props.app;
  const mobileDemo = app.demos.every(d => d.dims.web.width < 200);

  return (
    <div className="app_container">
      <Header
        title={app.title}
        est={app.desc}
        links={app.links}
        techs={app.techs}
      />
      <SubHeader desc={app.techs} />
      <div className={mobileDemo ? "mobile_demo_container" : "web_demo_container"}>
        {app.demos.map(demo => <Demo demo={demo} />)}
      </div>

    </div>

  );
}

export default Application;
