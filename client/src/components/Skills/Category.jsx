import React from 'react';
import images from '../../images';

const Category = ({ swClass, category, skills }) => {
  return (
    <div className={swClass.concat('category-container')}>
      <div className={swClass.concat('category-name')}>
        {category}
      </div>
      <ul className="skills">
        {skills[category].map(s => (
          <li className={swClass.concat('skill')}>
            <span className={swClass.concat('skill-text')}>{s.title}</span>
            <span className="skill-img-container">
              <img
                src={images['skills'][s.icon]}
                width={s.dims.width}
                height={s.dims.height}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
