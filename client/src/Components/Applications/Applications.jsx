import React from 'react';

import applications from '../../../../data/applications';
import Application from './Application.jsx';
import './Applications.css';

const Applications = () => {
  return (
    <div className="applications_container">
      {applications.map(app => <Application app={app} />)}
    </div>
  );
}

export default Applications;
