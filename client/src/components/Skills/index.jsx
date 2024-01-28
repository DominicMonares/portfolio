import React from 'react';

import Icons from '../Shared/Icons';
import skills from '../../../../data/skills';
import './Skills.css';

const Skills = ({ swClass }) => {
  const sortSkills = () => {
    const allSkills = [];
    for (const category in skills) {
      const skillRows = [];
      skills[category].forEach(s => {
        const dims = s['dims'][swClass ? 'web' : 'mobile'];
        skillRows.push(
          <div className={swClass.concat('tool')}>
            <span className={swClass.concat('tool-text')}>{s.title}</span>
            <div className="tool-img-container">
              <img src={s.icon} width={dims.width} height={dims.height} />
            </div>
          </div>
        );
      });

      allSkills.push(
        <div className={swClass.concat('category-container')}>
          <span className={swClass.concat('category-name')}>
            {category}
          </span>
          <div className="tools">
            {skillRows}
          </div>
        </div>
      );
    }

    return allSkills;
  }

  return (
    <div className={swClass.concat('skills-container')}>
      <div className="skills">
        {sortSkills()}
      </div>
      <Icons swClass={swClass} page="Skills" />
    </div>
  );
}

export default Skills;
