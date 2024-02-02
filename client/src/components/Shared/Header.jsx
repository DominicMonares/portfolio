import React from 'react';
import './Shared.css';

const Header = ({ swClass, title, est, estLink, location, year }) => {
  return swClass ? (
    <div className={swClass.concat('header-container')}>
      <span className='sw-header-title'>{title}</span>
      <span>
        {estLink ? (
          <a
            className={'sw-link'}
            href={estLink}
            target='-blank'
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        &nbsp;|&nbsp;
        <span>{location}</span>
        <span>&nbsp;|&nbsp;{year}</span>
      </span>
    </div>
  ) : (
    <div className={swClass.concat('header-container')}>
      <span>
        <span className='header-title'>{title}</span>
        &nbsp;|&nbsp;
        {estLink ? (
          <a
            className={'link'}
            href={estLink}
            target='-blank'
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        &nbsp;|&nbsp;
        <span>{location}</span>
      </span>
      <span className='year'>{year}</span>
    </div>
  );
}

export default Header;
