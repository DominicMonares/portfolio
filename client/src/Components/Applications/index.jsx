import React from 'react';

import Application from './Application.jsx';
import applications from '../../../../data/applications.js';
import './Applications.css';

const Applications = ({ wide }) => {
  return (
    <div className={wide ? 'w_applications_container' : 'm_applications_container'}>
      {applications.map(app => <Application wide={wide} app={app} />)}
    </div>
  );
}

export default Applications;
