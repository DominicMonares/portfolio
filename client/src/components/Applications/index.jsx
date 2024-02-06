import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Application from './Application.jsx';
import './Applications.css';

const Applications = ({ swClass }) => {
  // Fetch application portfolio data
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/applications');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setApplications(data);
      })
      .catch(err => { throw err })
  }, []);

  return (
    <div className={swClass.concat('applications')}>
      {applications.map(app => <Application swClass={swClass} app={app} />)}
    </div>
  );
}

export default Applications;
