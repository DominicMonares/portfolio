import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Header from '../Shared/Header';
import Bullets from '../Shared/Bullets';
import './Education.css';

const Education = ({ swClass }) => {
  // Fetch education data
  const [education, setEducation] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/edu');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setEducation(data);
      })
      .catch(err => { throw err })
  }, []);

  return (
    <div className={swClass.concat('education-container')}>
      {education.map(edu => (
        <div className={swClass.concat('edu-container')}>
          <Header
            swClass={swClass}
            title={edu.title}
            est={edu.est}
            estLink={edu.estLink}
            location={edu.location}
            year={edu.year}
          />
          {edu.bullets ? (
            <Bullets swClass={swClass} bullets={edu.bullets} />
          ) : (
            <span></span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;
