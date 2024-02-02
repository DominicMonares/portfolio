import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Category from './Category';
import Icons from '../Shared/Icons';
import './Skills.css';

const Skills = ({ swClass }) => {
  // Fetch skill data
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

  return (
    <div className={swClass.concat('skills-container')}>
      <div className="categories-container">
        {Object.keys(skills).map(category => (
          <Category
            swClass={swClass}
            category={category}
            skills={skills}
          />
        ))}
      </div>
      <Icons swClass={swClass} page="skills" />
    </div>
  );
}

export default Skills;
