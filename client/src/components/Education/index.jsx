import React from 'react';

import Header from '../Shared/Header';
import Bullets from '../Shared/Bullets';
import education from '../../../../data/education';
import './Education.css';

const Education = ({ swClass }) => {
  return (
    <div className={swClass.concat('education-container')}>
      {education.map(edu => {
        return (
          <div className={swClass.concat('edu-container')}>
            <Header
              swClass={swClass}
              title={edu.title}
              est={edu.est}
              estLink={edu.estLink}
              location={edu.location}
              year={edu.year}
            />
            {edu.bullets ? <Bullets swClass={swClass} bullets={edu.bullets} /> : <></>}
          </div>
        );
      })}
    </div>
  );
}

export default Education;
