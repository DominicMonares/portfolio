import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Demo from './Demo';

const Application = ({ wide, app }) => {
  const mobileDemo = app.demos.every(d => d.dims.web.width < 200);

  const getAppClass = () => {
    if (wide) {
      return mobileDemo ? 'w_mobile_demo_container' : 'w_web_demo_container';
    } else {
      return 'm_demo_container';
    }
  }

  return (
    <div className={wide ? 'w_app_container' : 'm_app_container'}>
      <Header
        wide={wide}
        title={app.title}
        est={app.desc}
        links={app.links}
        techs={app.techs}
      />
      <SubHeader wide={wide} desc={app.techs} />
      <div className={getAppClass()}>
        <Carousel
          showArrows={tru}
        >
          {app.demos.map(demo => <Demo wide={wide} demo={demo} />)}
        </Carousel>
      </div>
    </div>
  );
}

export default Application;
