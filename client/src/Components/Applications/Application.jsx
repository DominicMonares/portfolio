import React from 'react';

import Header from './Header.jsx';
import Demo from './Demo.jsx';

const Application = (props) => {
  const app = props.app;
  return (
    <div className="app_container">
      <Header
        app={app.title}
        desc={app.desc}
        links={app.links}
        techs={app.techs}
      />
      {app.demos.map(demo => <Demo demo={demo}/>)}
    </div>

  );
}

export default Application;
