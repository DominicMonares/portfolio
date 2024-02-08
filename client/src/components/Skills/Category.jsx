import React from 'react';
import media from '../../media';

const Category = ({ swClass, category, skills }) => {
  return (
    <div className={swClass.concat('category')}>
      <div className={swClass.concat('category-name')}>
        {category}
      </div>
      <ul className={swClass.concat('category-skills')}>
        {skills[category].map(s => (
          <li className={swClass.concat('skill')}>
            <span className={swClass.concat('skill-text')}>{s.title}</span>
            <span className={swClass.concat('skill-img-container')}>
              <img
                src={media['skills'][s.icon]}
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
