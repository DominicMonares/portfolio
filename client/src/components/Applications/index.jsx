import React from 'react';
import Application from './Application.jsx';
import applications from '../../../../data/applications.js';
import './Applications.css';

const Applications = ({ swClass }) => {
  return (
    <div className={swClass.concat('applications-container')}>
      {applications.map(app => <Application swClass={swClass} app={app} />)}
    </div>
  );
}

export default Applications;
