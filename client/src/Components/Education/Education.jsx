import React from 'react';

import Header from '../Shared/Header';
import Bullets from '../Shared/Bullets';
import education from '../../../../data/education';
import './Education.css';

const Education = ({ wide }) => {
  return (
    <div className={wide ? 'w_education_container' : 'm_education_container'}>
      {education.map(edu => {
        return (
          <div className={wide ? 'w_edu_container' : 'm_edu_container'}>
            <Header
              wide={wide}
              title={edu.title}
              est={edu.est}
              estLink={edu.estLink}
              location={edu.location}
              year={edu.year}
            />
            {edu.bullets ? <Bullets wide={wide} bullets={edu.bullets} /> : <></>}
          </div>
        );
      })}
    </div>
  );
}

export default Education;
