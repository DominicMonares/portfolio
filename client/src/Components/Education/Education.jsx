import React from 'react';

import Header from '../Shared/Header';
import Bullets from '../Shared/Bullets';
import education from '../../../../data/education';

const Education = () => {
  return (
    <div className="education_container">
      {education.map(edu => {
        return (
          <div className="edu_container">
            <Header
              title={edu.title}
              est={edu.est}
              estLink={edu.estLink}
              location={edu.location}
              year={edu.year}
            />
            {edu.bullets ? <Bullets bullets={edu.bullets} /> : <></>}
          </div>
        );
      })}
    </div>
  );
}

export default Education;
