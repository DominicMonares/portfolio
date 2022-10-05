import React from 'react';

import Icons from '../Shared/Icons';
import skills from '../../../../data/skills';
import './Skills.css';

const Skills = () => {
  const device = 'web'; // TEMP, NEEDS TO BE MADE DYNAMIC

  const sortSkills = () => {
    const allSkills = [];
    for (const category in skills) {
      const skillRows = [];
      let row = [];
      skills[category].forEach(s => {
        if (row.length === 6) {
          skillRows.push(<div className="skills">{row}</div>);
          row = [];
        }

        const dims = s['dims'][device];
        row.push(
          <div className="tool">
            <span className="tool_text">{s.title}</span>
            <img src={s.icon} width={dims.width} height={dims.height} />
          </div>
        );
      });

      if (row.length) skillRows.push(<div className="skills">{row}</div>);

      allSkills.push(
        <div className="category_container">
          <span className="category_name">{category}</span>
          {skillRows}
        </div>
      );
    }

    return allSkills;
  }

  return (
    <div className="skills_container">
      <div>{sortSkills()}</div>
      <Icons page="Skills" />
    </div>
  );
}

export default Skills;
