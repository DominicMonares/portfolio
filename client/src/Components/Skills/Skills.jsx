import React from 'react';

import Icons from '../Shared/Icons';
import skills from '../../../../data/skills';
import './Skills.css';

const Skills = () => {
  const device = 'web'; // TEMP, NEEDS TO BE MADE DYNAMIC
  const allSkills = [];
  for (const category in skills) {
    allSkills.push(
      <div className="category_container">
        <span className="skill_title">{category}</span>
        <div className="skill_container">
          {skills[category].map(s => {
            const dims = s['dims'][device];
            return (
              <div className="tool">
                <span className="tool_text">{s.title}</span>
                <img src={s.icon} width={dims.width} height={dims.height} />
              </div>
            );
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="skills_container">
      <div className="skills">{allSkills}</div>
      <Icons page="Skills" />
    </div>
  );
}

export default Skills;
