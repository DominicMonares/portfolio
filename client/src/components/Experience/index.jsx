import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Job from './Job';
import './Experience.css';

const Experience = ({ swClass }) => {
  // Fetch experience data 
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/exp');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setExperience(data);
      })
      .catch(err => { throw err })
  }, []);

  return (
    <div className={swClass.concat('experience-container')}>
      {experience.map(job => <Job swClass={swClass} job={job} />)}
    </div>
  );
}

export default Experience;
