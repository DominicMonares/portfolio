import React from 'react';
import images from '../../images';

const Category = ({ swClass, category, skills }) => {
  return (
    <div className={swClass.concat('category-container')}>
      <span className={swClass.concat('category-name')}>
        {category}
      </span>
      <div className="skills">
        {skills[category].map(s => (
          <div className={swClass.concat('skill')}>
            <span className={swClass.concat('skill-text')}>{s.title}</span>
            <div className="skill-img-container">
              <img
                src={images['skills'][s.icon]}
                width={s.dims.width}
                height={s.dims.height}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
