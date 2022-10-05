import React from 'react';

import Application from './Application.jsx';
import applications from '../../../../data/applications';
import './Applications.css';

const Applications = () => {
  return (
    <div className="applications_container">
      {applications.map(app => <Application app={app} />)}
    </div>
  );
}

export default Applications;
