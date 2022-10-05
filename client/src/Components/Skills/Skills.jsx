import React from 'react';

import Icons from '../Shared/Icons';
import skills from '../../../../data/skills';
import './Skills.css';

const Skills = ({ wide }) => {
  const device = wide ? 'web' : 'mobile';

  const sortSkills = () => {
    const allSkills = [];
    for (const category in skills) {
      const skillRows = [];
      let row = [];
      skills[category].forEach(s => {
        if (row.length === 6) {
          skillRows.push(<div className={wide ? 'w_skills' : 'm_skills'}>{row}</div>);
          row = [];
        }

        const dims = s['dims'][device];
        row.push(
          <div className={wide ? 'w_tool' : 'm_tool'}>
            <span className={wide ? 'w_tool_text' : 'm_tool_text'}>{s.title}</span>
            <img src={s.icon} width={dims.width} height={dims.height} />
          </div>
        );
      });

      if (row.length) {
        skillRows.push(<div className={wide ? 'w_skills' : 'm_skills'}>{row}</div>);
      }

      allSkills.push(
        <div className={wide ? 'w_category_container' : 'm_category_container'}>
          <span className={wide ? 'w_category_name' : 'm_category_name'}>{category}</span>
          {skillRows}
        </div>
      );
    }

    return allSkills;
  }

  return (
    <div className={wide ? 'w_skills_container' : 'm_skills_container'}>
      <div>{sortSkills()}</div>
      <Icons wide={wide} page="Skills" />
    </div>
  );
}

export default Skills;
