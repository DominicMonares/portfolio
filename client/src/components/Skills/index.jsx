import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Icons from '../Shared/Icons';
import images from '../../images';
import './Skills.css';

const Skills = ({ swClass }) => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const fetchData = async () => await fetch('/data/skills');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setSkills(data);
      })
      .catch(err => { throw err })
  }, []);

  const sortSkills = () => {
    const allSkills = [];
    for (const category in skills) {
      const skillRows = [];
      skills[category].forEach(s => {
        const dims = s['dims'][swClass ? 'mobile' : 'web'];
        skillRows.push(
          <div className={swClass.concat('tool')}>
            <span className={swClass.concat('tool-text')}>{s.title}</span>
            <div className="tool-img-container">
              <img
                src={images['skills'][s.icon]}
                width={dims.width}
                height={dims.height}
              />
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
      <Icons swClass={swClass} page="skills" />
    </div>
  );
}

export default Skills;
