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
      skills[category].forEach(s => {
        const dims = s['dims'][device];
        skillRows.push(
          <div className={wide ? 'w_tool' : 'm_tool'}>
            <span className={wide ? 'w_tool_text' : 'm_tool_text'}>{s.title}</span>
            <div className="w_tool_img_container">
              <img src={s.icon} width={dims.width} height={dims.height} />
            </div>
          </div>
        );
      });

      allSkills.push(
        <div className={wide ? 'w_category_container' : 'm_category_container'}>
          <span className={wide ? 'w_category_name' : 'm_category_name'}>
            {category}
          </span>
          <div className="w_tools">
            {skillRows}
          </div>
        </div>
      );
    }

    return allSkills;
  }

  return (
    <div className={wide ? 'w_skills_container' : 'm_skills_container'}>
      <div className="w_skills">
        {sortSkills()}
      </div>
      <Icons wide={wide} page="Skills" />
    </div>
  );
}

export default Skills;
